const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fillMuiInput = (value, selector) => {
  const container = $(selector);
  const input = container.find('input').get(0);

  const valueSetter = Object.getOwnPropertyDescriptor(input, 'value').set;
  const prototype = Object.getPrototypeOf(input);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(input, value);
  } else {
    valueSetter.call(input, value);
  }
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

const setCheckbox = (value, selector) => {
  const container = $(selector);
  container.find('label').filter(function() {
    return $(this).text().toLowerCase() === value;
  }).get(0).click();
}

const fillGeneralInfo = (data) => {
  const dataFieldsToInputsMap = {
    name: 'Name',
    email: 'Email',
    firstPhone: 'Primary phone',
    secondaryPhone: 'Secondary phone',
    desc: 'Business Description',
  };
  const valueSanitizers = {
    desc: (val) => val.slice(0, 20),
  }
  Object.entries(data).forEach(([key, value]) => {
    if (!value) return;
    const cleanValue = valueSanitizers[key] ? valueSanitizers[key](value) : value;
    fillMuiInput(
      cleanValue,
      `.MuiBox-root:first .MuiFormControl-root:contains(${dataFieldsToInputsMap[key]})`
    );
  });
}

const formatDate = (date) => {
  const dateObject = new Date(date);

  const dateWithLeadingZero = (date) => ('0' + date).slice(-2)

  return `${dateWithLeadingZero(dateObject.getMonth() + 1)}/${dateWithLeadingZero(dateObject.getDate())}/${dateObject.getFullYear()}`
}

const fillWorkerInfo = async (worker) => {
  const dataFieldsToInputsMap = {
    firstName: 'First Name',
    lastName: 'Last Name',
    job: 'Job position',
    experience: 'Work Experience (years)',
    dob: 'Birthday',
    gender: 'Gender',
  };

  const valueSanitizers = {
    firstName: (val) => val || 'First Name',
    lastName: (val) => val || 'Last Name',
    job: (val) => val || 'Director',
    dob: (val) => typeof val === 'string' ? formatDate(val) : '01/01/1970',
    experience: (val) => !val ? 1 : val > 30 ? 30 : val < 0 ? 0 : val,
    gender: (val) => typeof val === 'string' && ['female', 'male', 'other'].includes(val.toLowerCase()) ? val : 'other'
  }

  const createInputSelector = (fieldName) => `.MuiDialog-root .MuiBox-root:first .MuiFormControl-root:contains(${fieldName})`;

  const inputTypeToHandlerMap = {
    firstName: (value) => fillMuiInput(value, createInputSelector(dataFieldsToInputsMap.firstName)),
    lastName: (value) => fillMuiInput(value, createInputSelector(dataFieldsToInputsMap.lastName)),
    job: (value) => fillMuiInput(value, createInputSelector(dataFieldsToInputsMap.job)),
    experience: (value) => fillMuiInput(value, createInputSelector(dataFieldsToInputsMap.experience)),
    dob: (value) => fillMuiInput(value, createInputSelector(dataFieldsToInputsMap.dob)),
    gender: (value) => setCheckbox(value, `.MuiDialog-root fieldset:contains(${dataFieldsToInputsMap.gender})`),
  }

  fillMuiInput('1', createInputSelector(dataFieldsToInputsMap.dob))
  await sleep(10);
  Object.entries(worker).forEach(([key, value]) => {
    const cleanValue = valueSanitizers[key] ? valueSanitizers[key](value) : value;
    inputTypeToHandlerMap[key](cleanValue)
  });
}

const waitForLoading = async (container) => {
  while (container.find('.MuiCircularProgress-root').length === 1) { await sleep(10) }
}

const fillWorkersInfo = async (workers) => {
  const addButton = $('.MuiButtonBase-root:contains(Add)');

  for (const worker of workers) {
    addButton.click();
    await sleep(500)
    await waitForLoading($('.MuiDialog-container:first'));
    await fillWorkerInfo(worker)
    $('.MuiDialog-container:first .MuiButtonBase-root:contains(Add)').click();
    await waitForLoading($('.MuiDialog-container:first'));
  }
}

$(window).load(() => {
  $("button.MuiFab-root:contains('Fill')").click(async () => {
    console.log(data);
    const { workers, ...generalInfoInputs } = data;
    fillGeneralInfo(generalInfoInputs);
    await fillWorkersInfo(workers);
  })
})
