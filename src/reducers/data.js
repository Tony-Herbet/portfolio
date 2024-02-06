const initialState = {
  Folders: {
    'Root': {
      name: 'Root',
      content: [
        'presentation_name',
        'competences_name',
        'cv_name',
        'diplomas_name',
        'projects_name',
      ]
    },
    'diplomas_name': {
      name: 'diplomas_name',
      content: [
        'formation_dwwm_name',
        'opquast_name',
        'dwwm_name',
      ]
    },
    'projects_name': {
      name: 'projects_name',
      content: [
        'p3fc_name',
        'otd_name',
      ]
    }
  },
  'presentation_name': {
    name: 'presentation_name',
    text: 'presentation_text'
  },
  'competences_name': {
    name: 'competences_name',
    text: 'competences_text'
  },
  'formation_dwwm_name': {
    name: 'formation_dwwm_name',
    text: 'formation_dwwm_text'
  },
  'opquast_name': {
    name: 'opquast_name',
    text: 'opquast_text'
  },
  'dwwm_name': {
    name: 'dwwm_name',
    text: 'dwwm_text'
  },
  'p3fc_name': {
    name: 'p3fc_name',
    text: 'p3fc_text'
  },
  'otd_name': {
    name: 'otd_name',
    text: 'otd_text'
  },
  'cv_name': {
    name: 'cv_name',
    text: null,
  }
};

const data = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
} 
};

export default data;