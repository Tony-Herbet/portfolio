const initialState = {
  Folders: {
    'Root': {
      name: 'Root',
      content: [
        'Presentation.txt',
        'Competences.txt',
        'CV.pdf',
        'Diplomes',
        'Projets',
      ]
    },
    'Diplomes': {
      name: 'Diplomes',
      content: [
        'Formation_dwwm.txt',
        'Opquast.txt',
        'DWWM.txt',
      ]
    },
    'Projets': {
      name: 'Projets',
      content: [
        'P3FC.txt',
        'Old_The_Door.txt',
      ]
    }
  },
  'Presentation.txt': {
    name: 'Presentation.txt',
    text: 'Présentation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
  },
  'Competences.txt': {
    name: 'Competences.txt',
    text: 'Competences Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
  },
  'Formation_dwwm.txt': {
    name: 'Formation_dwwm.txt',
    text: 'Formation_dwwm Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
  },
  'Opquast.txt': {
    name: 'Opquast.txt',
    text: 'Opquast Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
  },
  'DWWM.txt': {
    name: 'DWWM.txt',
    text: 'DWWM Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
  },
  'P3FC.txt': {
    name: 'P3FC.txt',
    text: 'P3FC Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
  },
  'Old_The_Door.txt': {
    name: 'Old_The_Door.txt',
    text: 'Old_The_Door Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!'
  },
  'CV.pdf': {
    name: 'CV.pdf',
    text: null,
  }
};

const data = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
} 
};

export default data;

  //   {
  //     name: 'Presentation.txt',
  //     type: 'txt',
  //     content: [
  //       {
  //         name: 'Presentation.txt',
  //         type: 'txt',
  //         text: 'Présentation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Competences.txt',
  //     type: 'txt',
  //     content: [
  //       {
  //         name: 'Competences.txt',
  //         type: 'txt',
  //         text: 'Competences Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'CV.pdf',
  //     type: 'pdf',
  //     content: [
  //       {
  //         name: 'CV.pdf',
  //         type: 'pdf',
  //         text: undefined,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Diplomes',
  //     type: 'folder',
  //     content: [
  //       {
  //         name: 'Formation_dwwm.txt',
  //         type: 'txt',
  //         content: [
  //           {
  //             name: 'Formation_dwwm.txt',
  //             type: 'txt',
  //             text: 'Formation O\'clock DWWM Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Opquast.txt',
  //         type: 'txt',
  //         content: [
  //           {
  //             name: 'Opquast.txt',
  //             type: 'txt',
  //             text: 'Certification Opquast Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
  //           }
  //         ]
  //       },
  //       {
  //         name: 'DWWM.txt',
  //         type: 'txt',
  //         content: [
  //           {
  //             name: 'DWWM.txt',
  //             type: 'txt',
  //             text: 'Titre pro DWWM ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
  //           }
  //         ]
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Projets',
  //     type: 'folder',
  //     content: [
  //       {
  //         name: 'P3FC.txt',
  //         type: 'txt',
  //         content: [
  //           {
  //             name: 'P3FC.txt',
  //             type: 'txt',
  //             text: 'P3FC Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Old_The_Door.txt',
  //         type: 'txt',
  //         content: [
  //           {
  //             name: 'Old_The_Door.txt',
  //             type: 'txt',
  //             text: 'O\'ld The Door Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum pariatur porro modi, quod quisquam doloremque nulla repellat inventore repellendus. Omnis possimus harum voluptatibus officia illum repellat enim vel deleniti!',
  //           }
  //         ]
  //       },
  //     ],
  //   },
  // ]
