export default function () {
  return {
    genitourinary: {
      pageDataKey: 'genitourinary',
      pageTitle: 'Genitourinary assessment',
      pIndex: '18',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'genitourinary.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'genitourinary.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'genitourinary.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'genitourinary.time'
        },
        {
          elementKey: 'urinaryGroup1',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Urinary symptoms',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Increased frequency',
              text: 'Increased frequency'
            },
            {
              key: 'Dysuria',
              text: 'Dysuria'
            },
            {
              key: 'Hermaturia',
              text: 'Hermaturia'
            },
            {
              key: 'Oliguria',
              text: 'Oliguria'
            },
            {
              key: 'Incontinence',
              text: 'Incontinence'
            },
            {
              key: 'Retention',
              text: 'Retention'
            },
            {
              key: 'Distention',
              text: 'Distention'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Urinary symptoms',
          fqn: 'genitourinary.urinaryGroup1'
        },
        {
          elementKey: 'lastVoidedDay',
          formIndex: '1',
          inputType: 'day',
          label: 'Last voided day',
          tableColumn: '3',
          tableLabel: 'Last voided day',
          fqn: 'genitourinary.lastVoidedDay'
        },
        {
          elementKey: 'lastVoidedTime',
          formIndex: '1',
          inputType: 'time',
          label: 'Last voided time',
          tableColumn: '4',
          tableLabel: 'Last voided time',
          fqn: 'genitourinary.lastVoidedTime'
        },
        {
          elementKey: 'colour',
          formIndex: '1',
          inputType: 'select',
          label: 'Urine colour',
          options: [
            {
              key: 'Pale yellow',
              text: 'Pale yellow'
            },
            {
              key: 'Dark yellow',
              text: 'Dark yellow'
            },
            {
              key: 'Amber',
              text: 'Amber'
            },
            {
              key: 'Red/blood',
              text: 'Red/blood'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Urine colour',
          fqn: 'genitourinary.colour'
        },
        {
          elementKey: 'consistency',
          formIndex: '1',
          inputType: 'select',
          label: 'Urine consistency',
          options: [
            {
              key: 'Clear',
              text: 'Clear'
            },
            {
              key: 'Cloudy',
              text: 'Cloudy'
            },
            {
              key: 'Foamy',
              text: 'Foamy'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Urine consistency',
          fqn: 'genitourinary.consistency'
        },
        {
          elementKey: 'diaper',
          formIndex: '1',
          helperText: 'Does the patient need the assistance of a brief, condom catheter, or etc.',
          inputType: 'select',
          label: 'Continence containment device',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Continence containment device',
          fqn: 'genitourinary.diaper',
          helperHtml: '<p>Does the patient need the assistance of a brief, condom catheter, or etc.</p>'
        },
        {
          elementKey: 'toilettingMethod',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Toiletting method',
          options: [
            {
              key: 'Bedpan',
              text: 'Bedpan'
            },
            {
              key: 'Comode',
              text: 'Comode'
            },
            {
              key: 'Urinal,',
              text: 'Urinal,'
            },
            {
              key: 'Help to the toilette',
              text: 'Help to the toilette'
            },
            {
              key: 'Brief',
              text: 'Brief'
            },
            {
              key: 'Mesh pant/pad',
              text: 'Mesh pant/pad'
            },
            {
              key: 'Clean intermittent catheter',
              text: 'Clean intermittent catheter'
            },
            {
              key: 'Indwelling catheter',
              text: 'Indwelling catheter'
            }
          ],
          tableColumn: '8',
          tableCss: 'hr-table',
          fqn: 'genitourinary.toilettingMethod'
        },
        {
          elementKey: 'foley',
          formIndex: '1',
          inputType: 'select',
          label: 'Indwelling Catheter',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Indwelling Catheter',
          fqn: 'genitourinary.foley'
        },
        {
          elementKey: 'foleyType',
          formIndex: '1',
          helperText: 'eg. indwelling catheter',
          inputType: 'text',
          label: 'Type',
          tableColumn: '10',
          tableLabel: 'Type',
          fqn: 'genitourinary.foleyType',
          helperHtml: '<p>eg. indwelling catheter</p>'
        },
        {
          elementKey: 'foleySize',
          formIndex: '1',
          inputType: 'text',
          label: 'Size',
          tableColumn: '11',
          tableLabel: 'Size',
          fqn: 'genitourinary.foleySize'
        },
        {
          elementKey: 'lastChange',
          formIndex: '1',
          inputType: 'day',
          label: 'Last catheter change (day)',
          tableColumn: '12',
          tableCss: 'hr-table',
          tableLabel: 'Last catheter change (day)',
          fqn: 'genitourinary.lastChange'
        },
        {
          elementKey: 'pelvicPain',
          formIndex: '1',
          inputType: 'select',
          label: 'Pelvic pain',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '13',
          tableLabel: 'Pelvic pain',
          fqn: 'genitourinary.pelvicPain'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '14',
          tableLabel: 'Location',
          fqn: 'genitourinary.location'
        },
        {
          elementKey: 'pelvicPainSource',
          formIndex: '1',
          inputType: 'select',
          label: 'Pelvic pain source',
          options: [
            {
              key: 'Observed',
              text: 'Observed'
            },
            {
              key: 'As per patient observed',
              text: 'As per patient observed'
            },
            {
              key: 'Not observed',
              text: 'Not observed'
            }
          ],
          tableColumn: '15',
          tableCss: 'hr-table',
          tableLabel: 'Pelvic pain source',
          fqn: 'genitourinary.pelvicPainSource'
        },
        {
          elementKey: 'aLabel',
          formIndex: '1',
          inputType: 'form_label',
          label: 'If answered yes, please complete the pain assessment',
          fqn: 'genitourinary.aLabel'
        },
        {
          elementKey: 'discharge',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Discharge',
          options: [
            {
              key: 'Discharge',
              text: 'Discharge'
            },
            {
              key: 'Bleeding',
              text: 'Bleeding'
            }
          ],
          tableColumn: '16',
          tableLabel: 'Discharge',
          fqn: 'genitourinary.discharge'
        },
        {
          elementKey: 'description',
          formIndex: '1',
          inputType: 'text',
          label: 'Description',
          tableColumn: '17',
          tableLabel: 'Description',
          fqn: 'genitourinary.description'
        },
        {
          elementKey: 'lastMenstrualPeriodDate',
          formIndex: '1',
          inputType: 'date',
          label: 'Last menstrual period date',
          tableColumn: '18',
          tableCss: 'hr-table',
          tableLabel: 'Last menstrual period date',
          fqn: 'genitourinary.lastMenstrualPeriodDate'
        },
        {
          elementKey: 'pregnant',
          formIndex: '1',
          inputType: 'select',
          label: 'Pregnant',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            },
            {
              key: 'Unknown',
              text: 'Unknown'
            }
          ],
          tableColumn: '19',
          tableLabel: 'Pregnant',
          fqn: 'genitourinary.pregnant'
        },
        {
          elementKey: 'gravida',
          formIndex: '1',
          inputType: 'text',
          label: 'Gravida (number of pregnancies)',
          tableColumn: '20',
          tableLabel: 'Gravida (number of pregnancies)',
          fqn: 'genitourinary.gravida'
        },
        {
          elementKey: 'para',
          formIndex: '1',
          inputType: 'text',
          label: 'Para (number of children)',
          tableColumn: '21',
          tableLabel: 'Para (number of children)',
          fqn: 'genitourinary.para'
        },
        {
          elementKey: 'livingChildren',
          formIndex: '1',
          inputType: 'text',
          label: 'Living children',
          tableColumn: '22',
          tableCss: 'hr-table',
          tableLabel: 'Living children',
          fqn: 'genitourinary.livingChildren'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '23',
          tableLabel: 'Comments',
          fqn: 'genitourinary.comments'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a genitourinary assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Urinary symptoms',
              ehr_list_index: '2',
              items: [
                'urinaryGroup1'
              ]
            },
            {
              label: 'Last voided day',
              ehr_list_index: '3',
              items: [
                'lastVoidedDay'
              ]
            },
            {
              label: 'Last voided time',
              ehr_list_index: '4',
              items: [
                'lastVoidedTime'
              ]
            },
            {
              label: 'Urine colour',
              ehr_list_index: '5',
              items: [
                'colour'
              ]
            },
            {
              label: 'Urine consistency',
              ehr_list_index: '6',
              items: [
                'consistency'
              ]
            },
            {
              label: 'Continence containment device',
              ehr_list_index: '7',
              items: [
                'diaper'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '8',
              items: [
                'toilettingMethod'
              ]
            },
            {
              label: 'Indwelling Catheter',
              ehr_list_index: '9',
              items: [
                'foley'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '10',
              items: [
                'foleyType'
              ]
            },
            {
              label: 'Size',
              ehr_list_index: '11',
              items: [
                'foleySize'
              ]
            },
            {
              label: 'Last catheter change (day)',
              tableCss: 'hr-table',
              ehr_list_index: '12',
              items: [
                'lastChange'
              ]
            },
            {
              label: 'Pelvic pain',
              ehr_list_index: '13',
              items: [
                'pelvicPain'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '14',
              items: [
                'location'
              ]
            },
            {
              label: 'Pelvic pain source',
              tableCss: 'hr-table',
              ehr_list_index: '15',
              items: [
                'pelvicPainSource'
              ]
            },
            {
              label: 'Discharge',
              ehr_list_index: '16',
              items: [
                'discharge'
              ]
            },
            {
              label: 'Description',
              ehr_list_index: '17',
              items: [
                'description'
              ]
            },
            {
              label: 'Last menstrual period date',
              tableCss: 'hr-table',
              ehr_list_index: '18',
              items: [
                'lastMenstrualPeriodDate'
              ]
            },
            {
              label: 'Pregnant',
              ehr_list_index: '19',
              items: [
                'pregnant'
              ]
            },
            {
              label: 'Gravida (number of pregnancies)',
              ehr_list_index: '20',
              items: [
                'gravida'
              ]
            },
            {
              label: 'Para (number of children)',
              ehr_list_index: '21',
              items: [
                'para'
              ]
            },
            {
              label: 'Living children',
              tableCss: 'hr-table',
              ehr_list_index: '22',
              items: [
                'livingChildren'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '23',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a genitourinary assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group41',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'urinaryGroup2',
                label: 'Urinary',
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'urinaryGroup1',
                  'lastVoidedDay',
                  'lastVoidedTime',
                  'colour',
                  'consistency',
                  'diaper',
                  'toilettingMethod'
                ]
              },
              {
                elementKey: 'foleyGroup',
                label: 'Indwelling Catheter',
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'foley',
                  'foleyType',
                  'foleySize',
                  'lastChange'
                ]
              },
              {
                elementKey: 'pelvicGroup',
                label: 'Pelvic',
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'pelvicPain',
                  'location',
                  'pelvicPainSource',
                  'aLabel'
                ]
              },
              {
                elementKey: 'vaginal',
                label: 'Vagina',
                formCss: 'section-divider',
                gIndex: '5',
                gChildren: [
                  'discharge',
                  'description',
                  'lastMenstrualPeriodDate'
                ]
              },
              {
                elementKey: 'pregnantGroup',
                label: 'Pregnancy',
                formCss: 'section-divider',
                gIndex: '6',
                gChildren: [
                  'pregnant',
                  'gravida',
                  'para',
                  'livingChildren'
                ]
              },
              {
                elementKey: 'ehr_group42',
                formCss: 'grid-left-to-right-1',
                gIndex: '7',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              urinaryGroup1: '',
              lastVoidedDay: '',
              lastVoidedTime: '',
              colour: '',
              consistency: '',
              diaper: '',
              toilettingMethod: '',
              foley: '',
              foleyType: '',
              foleySize: '',
              lastChange: '',
              pelvicPain: '',
              location: '',
              pelvicPainSource: '',
              discharge: '',
              description: '',
              lastMenstrualPeriodDate: '',
              pregnant: '',
              gravida: '',
              para: '',
              livingChildren: '',
              comments: ''
            }
          }
        }
      }
    },
    musculoskeletal: {
      pageDataKey: 'musculoskeletal',
      pageTitle: 'Musculoskeletal assessment',
      pIndex: '19',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'musculoskeletal.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'musculoskeletal.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'musculoskeletal.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'musculoskeletal.time'
        },
        {
          elementKey: 'swelling',
          formIndex: '1',
          inputType: 'select',
          label: 'Swelling',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Swelling',
          fqn: 'musculoskeletal.swelling'
        },
        {
          elementKey: 'pain',
          formIndex: '1',
          inputType: 'select',
          label: 'Pain',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '3',
          tableLabel: 'Pain',
          fqn: 'musculoskeletal.pain'
        },
        {
          elementKey: 'deformity',
          formIndex: '1',
          inputType: 'select',
          label: 'Deformity',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '4',
          tableLabel: 'Deformity',
          fqn: 'musculoskeletal.deformity'
        },
        {
          elementKey: 'movement',
          formIndex: '1',
          inputType: 'select',
          label: 'Movement',
          options: [
            {
              key: 'Normal',
              text: 'Normal'
            },
            {
              key: 'Decreased',
              text: 'Decreased'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Movement',
          fqn: 'musculoskeletal.movement'
        },
        {
          elementKey: 'sensation',
          formIndex: '1',
          inputType: 'select',
          label: 'Sensation',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            },
            {
              key: 'Numb',
              text: 'Numb'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Sensation',
          fqn: 'musculoskeletal.sensation'
        },
        {
          elementKey: 'pulse',
          formIndex: '1',
          inputType: 'select',
          label: 'Pulse',
          options: [
            {
              key: 'Absent',
              text: 'Absent'
            },
            {
              key: 'Weak',
              text: 'Weak'
            },
            {
              key: 'Moderate',
              text: 'Moderate'
            },
            {
              key: 'Strong',
              text: 'Strong'
            },
            {
              key: 'Bounding',
              text: 'Bounding'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Pulse',
          fqn: 'musculoskeletal.pulse'
        },
        {
          elementKey: 'colour',
          formIndex: '1',
          inputType: 'select',
          label: 'Colour',
          options: [
            {
              key: 'Flesh',
              text: 'Flesh'
            },
            {
              key: 'Pale',
              text: 'Pale'
            },
            {
              key: 'Cynanotic',
              text: 'Cynanotic'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Colour',
          fqn: 'musculoskeletal.colour'
        },
        {
          elementKey: 'temp',
          assetBase: '?',
          formIndex: '1',
          inputType: 'select',
          label: 'Temp',
          options: [
            {
              key: 'Hot',
              text: 'Hot'
            },
            {
              key: 'Warm',
              text: 'Warm'
            },
            {
              key: 'Cold',
              text: 'Cold'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Temp',
          fqn: 'musculoskeletal.temp'
        },
        {
          elementKey: 'spacer45',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'musculoskeletal.spacer45'
        },
        {
          elementKey: 'useOfAmbulatoryAid',
          assetBase: '?',
          formIndex: '1',
          inputType: 'select',
          label: 'Use of ambulatory aid',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '10',
          tableLabel: 'Use of ambulatory aid',
          fqn: 'musculoskeletal.useOfAmbulatoryAid'
        },
        {
          elementKey: 'type',
          assetBase: '?',
          formIndex: '1',
          inputType: 'select',
          label: 'Type',
          options: [
            {
              key: 'Walker',
              text: 'Walker'
            },
            {
              key: 'Cane',
              text: 'Cane'
            },
            {
              key: 'One crutch',
              text: 'One crutch'
            },
            {
              key: 'Two crutches',
              text: 'Two crutches'
            },
            {
              key: 'Wheelchair',
              text: 'Wheelchair'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '11',
          tableCss: 'hr-table',
          tableLabel: 'Type',
          fqn: 'musculoskeletal.type'
        },
        {
          elementKey: 'comments',
          assetBase: '?',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '12',
          tableLabel: 'Comments',
          fqn: 'musculoskeletal.comments'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a musculoskeletal assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Swelling',
              ehr_list_index: '2',
              items: [
                'swelling'
              ]
            },
            {
              label: 'Pain',
              ehr_list_index: '3',
              items: [
                'pain'
              ]
            },
            {
              label: 'Deformity',
              ehr_list_index: '4',
              items: [
                'deformity'
              ]
            },
            {
              label: 'Movement',
              ehr_list_index: '5',
              items: [
                'movement'
              ]
            },
            {
              label: 'Sensation',
              ehr_list_index: '6',
              items: [
                'sensation'
              ]
            },
            {
              label: 'Pulse',
              ehr_list_index: '7',
              items: [
                'pulse'
              ]
            },
            {
              label: 'Colour',
              ehr_list_index: '8',
              items: [
                'colour'
              ]
            },
            {
              label: 'Temp',
              ehr_list_index: '9',
              items: [
                'temp'
              ]
            },
            {
              label: 'Use of ambulatory aid',
              ehr_list_index: '10',
              items: [
                'useOfAmbulatoryAid'
              ]
            },
            {
              label: 'Type',
              tableCss: 'hr-table',
              ehr_list_index: '11',
              items: [
                'type'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '12',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a musculoskeletal assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group43',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group44',
                gIndex: '2',
                gChildren: [
                  'swelling',
                  'pain',
                  'deformity',
                  'movement',
                  'sensation',
                  'pulse',
                  'colour',
                  'temp',
                  'spacer45',
                  'useOfAmbulatoryAid',
                  'type'
                ]
              },
              {
                elementKey: 'ehr_group46',
                formCss: 'grid-left-to-right-1',
                gIndex: '3',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              swelling: '',
              pain: '',
              deformity: '',
              movement: '',
              sensation: '',
              pulse: '',
              colour: '',
              temp: '',
              useOfAmbulatoryAid: '',
              type: '',
              comments: ''
            }
          }
        }
      }
    },
    pain: {
      pageDataKey: 'pain',
      pageTitle: 'Pain assessment',
      pIndex: '20',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'pain.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'pain.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'pain.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'pain.time'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '2',
          tableLabel: 'Location',
          fqn: 'pain.location'
        },
        {
          elementKey: 'painScale',
          formIndex: '1',
          inputType: 'text',
          label: 'Pain intensity (0-10)',
          suffix: '/10',
          tableColumn: '3',
          tableLabel: 'Pain intensity (0-10)',
          fqn: 'pain.painScale'
        },
        {
          elementKey: 'respiratoryRate',
          formIndex: '1',
          inputType: 'text',
          label: 'Respiratory rate',
          suffix: 'br/min',
          tableColumn: '4',
          tableLabel: 'Respiratory rate',
          fqn: 'pain.respiratoryRate'
        },
        {
          elementKey: 'onset',
          formIndex: '1',
          inputType: 'text',
          label: 'Onset',
          tableColumn: '5',
          tableLabel: 'Onset',
          fqn: 'pain.onset'
        },
        {
          elementKey: 'type',
          formIndex: '1',
          inputType: 'text',
          label: 'Type',
          tableColumn: '6',
          tableLabel: 'Type',
          fqn: 'pain.type'
        },
        {
          elementKey: 'alleviationAssociatedSymptoms',
          formIndex: '1',
          inputType: 'text',
          label: 'Alleviation & associated symptoms',
          tableColumn: '7',
          tableLabel: 'Alleviation & associated symptoms',
          fqn: 'pain.alleviationAssociatedSymptoms'
        },
        {
          elementKey: 'radiation',
          formIndex: '1',
          inputType: 'text',
          label: 'Radiation',
          tableColumn: '8',
          tableLabel: 'Radiation',
          fqn: 'pain.radiation'
        },
        {
          elementKey: 'precipitatingEvents',
          formIndex: '1',
          inputType: 'text',
          label: 'Precipitating events',
          tableColumn: '9',
          tableCss: 'hr-table',
          tableLabel: 'Precipitating events',
          fqn: 'pain.precipitatingEvents'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '10',
          tableCss: 'hr-table',
          tableLabel: 'Comments',
          fqn: 'pain.comments'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '12',
          tableLabel: 'Location',
          fqn: 'pain.location'
        },
        {
          elementKey: 'painScale',
          formIndex: '1',
          inputType: 'text',
          label: 'Pain intensity (0-10)',
          suffix: '/10',
          tableColumn: '13',
          tableLabel: 'Pain intensity (0-10)',
          fqn: 'pain.painScale'
        },
        {
          elementKey: 'respiratoryRate',
          formIndex: '1',
          inputType: 'text',
          label: 'Respiratory rate',
          suffix: 'br/min',
          tableColumn: '14',
          tableLabel: 'Respiratory rate',
          fqn: 'pain.respiratoryRate'
        },
        {
          elementKey: 'onset',
          formIndex: '1',
          inputType: 'text',
          label: 'Onset',
          tableColumn: '15',
          tableLabel: 'Onset',
          fqn: 'pain.onset'
        },
        {
          elementKey: 'type',
          formIndex: '1',
          inputType: 'text',
          label: 'Type',
          tableColumn: '16',
          tableLabel: 'Type',
          fqn: 'pain.type'
        },
        {
          elementKey: 'alleviationAssociatedSymptoms',
          formIndex: '1',
          inputType: 'text',
          label: 'Alleviation & associated symptoms',
          tableColumn: '17',
          tableLabel: 'Alleviation & associated symptoms',
          fqn: 'pain.alleviationAssociatedSymptoms'
        },
        {
          elementKey: 'radiation',
          formIndex: '1',
          inputType: 'text',
          label: 'Radiation',
          tableColumn: '18',
          tableLabel: 'Radiation',
          fqn: 'pain.radiation'
        },
        {
          elementKey: 'precipitatingEvents',
          formIndex: '1',
          inputType: 'text',
          label: 'Precipitating events',
          tableColumn: '19',
          tableCss: 'hr-table',
          tableLabel: 'Precipitating events',
          fqn: 'pain.precipitatingEvents'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '20',
          tableLabel: 'Comments',
          fqn: 'pain.comments'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a pain assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '2',
              items: [
                'location'
              ]
            },
            {
              label: 'Pain intensity (0-10)',
              ehr_list_index: '3',
              items: [
                'painScale'
              ]
            },
            {
              label: 'Respiratory rate',
              ehr_list_index: '4',
              items: [
                'respiratoryRate'
              ]
            },
            {
              label: 'Onset',
              ehr_list_index: '5',
              items: [
                'onset'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '6',
              items: [
                'type'
              ]
            },
            {
              label: 'Alleviation & associated symptoms',
              ehr_list_index: '7',
              items: [
                'alleviationAssociatedSymptoms'
              ]
            },
            {
              label: 'Radiation',
              ehr_list_index: '8',
              items: [
                'radiation'
              ]
            },
            {
              label: 'Precipitating events',
              tableCss: 'hr-table',
              ehr_list_index: '9',
              items: [
                'precipitatingEvents'
              ]
            },
            {
              label: 'Comments',
              tableCss: 'hr-table',
              ehr_list_index: '10',
              items: [
                'comments'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '12',
              items: [
                'location'
              ]
            },
            {
              label: 'Pain intensity (0-10)',
              ehr_list_index: '13',
              items: [
                'painScale'
              ]
            },
            {
              label: 'Respiratory rate',
              ehr_list_index: '14',
              items: [
                'respiratoryRate'
              ]
            },
            {
              label: 'Onset',
              ehr_list_index: '15',
              items: [
                'onset'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '16',
              items: [
                'type'
              ]
            },
            {
              label: 'Alleviation & associated symptoms',
              ehr_list_index: '17',
              items: [
                'alleviationAssociatedSymptoms'
              ]
            },
            {
              label: 'Radiation',
              ehr_list_index: '18',
              items: [
                'radiation'
              ]
            },
            {
              label: 'Precipitating events',
              tableCss: 'hr-table',
              ehr_list_index: '19',
              items: [
                'precipitatingEvents'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '20',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a pain assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group54',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group55',
                label: 'Primary pain site',
                gIndex: '2',
                gChildren: [
                  'location',
                  'painScale',
                  'respiratoryRate',
                  'onset',
                  'type',
                  'alleviationAssociatedSymptoms',
                  'radiation',
                  'precipitatingEvents'
                ]
              },
              {
                elementKey: 'ehr_group56',
                formCss: 'grid-left-to-right-1 section-divider',
                gIndex: '3',
                gChildren: [
                  'comments'
                ]
              },
              {
                elementKey: 'ehr_group57',
                label: 'Secondary pain site',
                gIndex: '4',
                gChildren: [
                  'location',
                  'painScale',
                  'respiratoryRate',
                  'onset',
                  'type',
                  'alleviationAssociatedSymptoms',
                  'radiation',
                  'precipitatingEvents'
                ]
              },
              {
                elementKey: 'ehr_group58',
                formCss: 'grid-left-to-right-1',
                gIndex: '5',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              location: '',
              painScale: '',
              respiratoryRate: '',
              onset: '',
              type: '',
              alleviationAssociatedSymptoms: '',
              radiation: '',
              precipitatingEvents: '',
              comments: ''
            }
          }
        }
      }
    },
    biopsychosocial: {
      pageDataKey: 'biopsychosocial',
      pageTitle: 'Biopsychosocial assessment',
      pIndex: '21',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'biopsychosocial.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'biopsychosocial.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'biopsychosocial.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'biopsychosocial.time'
        },
        {
          elementKey: 'domesticViolence',
          formIndex: '1',
          inputType: 'select',
          label: 'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
          options: [
            {
              key: 'Didn\'t ask',
              text: 'Didn\'t ask'
            },
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Domestic violence?',
          fqn: 'biopsychosocial.domesticViolence'
        },
        {
          elementKey: 'requestContact',
          formIndex: '1',
          inputType: 'select',
          label: 'Would you like to speak to a social worker?',
          options: [
            {
              key: 'Didn\'t ask',
              text: 'Didn\'t ask'
            },
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '3',
          tableCss: 'hr-table',
          tableLabel: 'Social worker?',
          fqn: 'biopsychosocial.requestContact'
        },
        {
          elementKey: 'hygieneGrooming',
          formIndex: '1',
          inputType: 'select',
          label: 'Hygiene',
          options: [
            {
              key: 'Good',
              text: 'Good'
            },
            {
              key: 'Requires attention',
              text: 'Requires attention'
            }
          ],
          tableColumn: '4',
          tableLabel: 'Hygiene',
          fqn: 'biopsychosocial.hygieneGrooming'
        },
        {
          elementKey: 'hygieneComments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Hygiene comments',
          tableColumn: '5',
          tableCss: 'hr-table',
          tableLabel: 'Hygiene comments',
          fqn: 'biopsychosocial.hygieneComments'
        },
        {
          elementKey: 'behaviour',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Behaviour',
          options: [
            {
              key: 'Calm',
              text: 'Calm'
            },
            {
              key: 'Cooperative',
              text: 'Cooperative'
            },
            {
              key: 'Agitated',
              text: 'Agitated'
            },
            {
              key: 'Flat affect',
              text: 'Flat affect'
            },
            {
              key: 'Threatening',
              text: 'Threatening'
            },
            {
              key: 'Physically agressive',
              text: 'Physically agressive'
            },
            {
              key: 'Uncommunicative',
              text: 'Uncommunicative'
            }
          ],
          tableColumn: '6',
          tableCss: 'hr-table',
          tableLabel: 'Behaviour',
          fqn: 'biopsychosocial.behaviour'
        },
        {
          elementKey: 'hallucinations',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Hallucinations',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Visual',
              text: 'Visual'
            },
            {
              key: 'Auditory',
              text: 'Auditory'
            },
            {
              key: 'Olafactory',
              text: 'Olafactory'
            }
          ],
          tableColumn: '7',
          tableCss: 'hr-table',
          tableLabel: 'Behaviour',
          fqn: 'biopsychosocial.hallucinations'
        },
        {
          elementKey: 'suicidal',
          formIndex: '1',
          inputType: 'select',
          label: 'Suicidal',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Ideation',
              text: 'Ideation'
            },
            {
              key: 'Attempt',
              text: 'Attempt'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Psychological state',
          fqn: 'biopsychosocial.suicidal'
        },
        {
          elementKey: 'homicidal',
          formIndex: '1',
          inputType: 'select',
          label: 'Homicidal',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Ideation',
              text: 'Ideation'
            }
          ],
          tableColumn: '9',
          fqn: 'biopsychosocial.homicidal'
        },
        {
          elementKey: 'speech',
          formIndex: '1',
          inputType: 'select',
          label: 'Speech',
          options: [
            {
              key: 'Clear and coherent',
              text: 'Clear and coherent'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '10',
          tableCss: 'hr-table',
          fqn: 'biopsychosocial.speech'
        },
        {
          elementKey: 'supportPerson',
          formIndex: '1',
          inputType: 'text',
          label: 'Support person',
          tableColumn: '11',
          tableLabel: 'Support',
          fqn: 'biopsychosocial.supportPerson'
        },
        {
          elementKey: 'supportComments',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'textarea',
          label: 'Support comments',
          tableColumn: '12',
          tableCss: 'hr-table',
          fqn: 'biopsychosocial.supportComments'
        },
        {
          elementKey: 'securityPolicePresent',
          formIndex: '1',
          inputType: 'text',
          label: 'Security/police present',
          tableColumn: '13',
          tableLabel: 'Security',
          fqn: 'biopsychosocial.securityPolicePresent'
        },
        {
          elementKey: 'securityComments',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'textarea',
          label: 'Security comments',
          tableColumn: '14',
          tableCss: 'hr-table',
          fqn: 'biopsychosocial.securityComments'
        },
        {
          elementKey: 'patientRestrained',
          formIndex: '1',
          inputType: 'select',
          label: 'Patient restrained',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '15',
          tableLabel: 'Patient restrained',
          fqn: 'biopsychosocial.patientRestrained'
        },
        {
          elementKey: 'restraintDay',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '16',
          tableLabel: 'Day',
          fqn: 'biopsychosocial.restraintDay'
        },
        {
          elementKey: 'restraintTime',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '17',
          tableLabel: 'Time',
          fqn: 'biopsychosocial.restraintTime'
        },
        {
          elementKey: 'restraintComments',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'textarea',
          label: 'Restraint comments',
          tableColumn: '18',
          tableCss: 'hr-table',
          tableLabel: 'Restraint comments',
          fqn: 'biopsychosocial.restraintComments'
        },
        {
          elementKey: 'generalComments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'General comments',
          tableColumn: '19',
          tableLabel: 'General comments',
          fqn: 'biopsychosocial.generalComments'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a biopsychosocial assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Domestic violence?',
              ehr_list_index: '2',
              items: [
                'domesticViolence'
              ]
            },
            {
              label: 'Social worker?',
              tableCss: 'hr-table',
              ehr_list_index: '3',
              items: [
                'requestContact'
              ]
            },
            {
              label: 'Hygiene',
              ehr_list_index: '4',
              items: [
                'hygieneGrooming'
              ]
            },
            {
              label: 'Hygiene comments',
              tableCss: 'hr-table',
              ehr_list_index: '5',
              items: [
                'hygieneComments'
              ]
            },
            {
              label: 'Behaviour',
              tableCss: 'hr-table',
              ehr_list_index: '6',
              items: [
                'behaviour'
              ]
            },
            {
              label: 'Behaviour',
              tableCss: 'hr-table',
              ehr_list_index: '7',
              items: [
                'hallucinations'
              ]
            },
            {
              label: 'Psychological state',
              ehr_list_index: '8',
              items: [
                'suicidal'
              ]
            },
            {
              ehr_list_index: '9',
              items: [
                'homicidal'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '10',
              items: [
                'speech'
              ]
            },
            {
              label: 'Support',
              ehr_list_index: '11',
              items: [
                'supportPerson'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '12',
              items: [
                'supportComments'
              ]
            },
            {
              label: 'Security',
              ehr_list_index: '13',
              items: [
                'securityPolicePresent'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '14',
              items: [
                'securityComments'
              ]
            },
            {
              label: 'Patient restrained',
              ehr_list_index: '15',
              items: [
                'patientRestrained'
              ]
            },
            {
              label: 'Day',
              ehr_list_index: '16',
              items: [
                'restraintDay'
              ]
            },
            {
              label: 'Time',
              ehr_list_index: '17',
              items: [
                'restraintTime'
              ]
            },
            {
              label: 'Restraint comments',
              tableCss: 'hr-table',
              ehr_list_index: '18',
              items: [
                'restraintComments'
              ]
            },
            {
              label: 'General comments',
              ehr_list_index: '19',
              items: [
                'generalComments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a biopsychosocial assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group59',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group60',
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'domesticViolence',
                  'requestContact'
                ]
              },
              {
                elementKey: 'ehr_group61',
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'hygieneGrooming',
                  'hygieneComments'
                ]
              },
              {
                elementKey: 'ehr_group62',
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'behaviour',
                  'hallucinations'
                ]
              },
              {
                elementKey: 'state',
                label: 'Psychological state',
                gIndex: '5',
                gChildren: [
                  'suicidal',
                  'homicidal',
                  'speech'
                ]
              },
              {
                elementKey: 'support',
                label: 'Support',
                gIndex: '6',
                gChildren: [
                  'supportPerson',
                  'supportComments'
                ]
              },
              {
                elementKey: 'security',
                label: 'Security',
                gIndex: '7',
                gChildren: [
                  'securityPolicePresent',
                  'securityComments'
                ]
              },
              {
                elementKey: 'restraint',
                label: 'Restraint',
                gIndex: '8',
                gChildren: [
                  'patientRestrained',
                  'restraintDay',
                  'restraintTime',
                  'restraintComments'
                ]
              },
              {
                elementKey: 'ehr_group63',
                formCss: 'grid-left-to-right-1',
                gIndex: '9',
                gChildren: [
                  'generalComments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              domesticViolence: '',
              requestContact: '',
              hygieneGrooming: '',
              hygieneComments: '',
              behaviour: '',
              hallucinations: '',
              suicidal: '',
              homicidal: '',
              speech: '',
              supportPerson: '',
              supportComments: '',
              securityPolicePresent: '',
              securityComments: '',
              patientRestrained: '',
              restraintDay: '',
              restraintTime: '',
              restraintComments: '',
              generalComments: ''
            }
          }
        }
      }
    },
    nonmedOrders: {
      pageDataKey: 'nonmedOrders',
      pageTitle: 'Orders',
      pIndex: '22',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'nonmedOrders.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'nonmedOrders.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'nonmedOrders.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'nonmedOrders.time'
        },
        {
          elementKey: 'order',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'text',
          label: 'Order',
          tableColumn: '2',
          tableLabel: 'Order',
          fqn: 'nonmedOrders.order'
        },
        {
          elementKey: 'orderedBy',
          formIndex: '1',
          inputType: 'text',
          label: 'Ordered by',
          mandatory: 'If order is filled, this is mandatory',
          tableColumn: '3',
          tableLabel: 'Ordered by',
          fqn: 'nonmedOrders.orderedBy'
        },
        {
          elementKey: 'reason',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'text',
          label: 'Reason',
          tableColumn: '4',
          tableLabel: 'Reason',
          fqn: 'nonmedOrders.reason'
        },
        {
          elementKey: 'status',
          formIndex: '1',
          inputType: 'select',
          label: 'Status',
          mandatory: '?',
          options: [
            {
              key: 'Ordered',
              text: 'Ordered'
            },
            {
              key: 'In process',
              text: 'In process'
            },
            {
              key: 'Cancelled',
              text: 'Cancelled'
            },
            {
              key: 'Completed',
              text: 'Completed'
            },
            {
              key: 'Discontinued',
              text: 'Discontinued'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Status',
          fqn: 'nonmedOrders.status'
        },
        {
          elementKey: 'comment',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comment',
          tableColumn: '6',
          tableLabel: 'Comment',
          fqn: 'nonmedOrders.comment'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an order',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Order',
              ehr_list_index: '2',
              items: [
                'order'
              ]
            },
            {
              label: 'Ordered by',
              ehr_list_index: '3',
              items: [
                'orderedBy'
              ]
            },
            {
              label: 'Reason',
              ehr_list_index: '4',
              items: [
                'reason'
              ]
            },
            {
              label: 'Status',
              ehr_list_index: '5',
              items: [
                'status'
              ]
            },
            {
              label: 'Comment',
              ehr_list_index: '6',
              items: [
                'comment'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an order',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group64',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group65',
                gIndex: '2',
                gChildren: [
                  'order',
                  'orderedBy',
                  'reason',
                  'status'
                ]
              },
              {
                elementKey: 'ehr_group66',
                formCss: 'grid-left-to-right-1',
                gIndex: '3',
                gChildren: [
                  'comment'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              order: '',
              orderedBy: '',
              reason: '',
              status: '',
              comment: ''
            }
          }
        }
      }
    },
    referrals: {
      pageDataKey: 'referrals',
      pageTitle: 'Referrals to other disciplines',
      pIndex: '23',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'referrals.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'referrals.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'referrals.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'referrals.time'
        },
        {
          elementKey: 'referralName',
          formIndex: '1',
          inputType: 'text',
          label: 'Referral name',
          tableColumn: '2',
          tableLabel: 'Referral name',
          fqn: 'referrals.referralName'
        },
        {
          elementKey: 'referralProfession',
          formIndex: '1',
          inputType: 'text',
          label: 'Referral profession',
          tableColumn: '3',
          tableLabel: 'Referral profession',
          fqn: 'referrals.referralProfession'
        },
        {
          elementKey: 'spacer69',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'referrals.spacer69'
        },
        {
          elementKey: 'appointmentDate',
          formIndex: '1',
          inputType: 'date',
          label: 'Appointment date',
          tableColumn: '4',
          tableLabel: 'Appointment date',
          fqn: 'referrals.appointmentDate'
        },
        {
          elementKey: 'appointmentTime',
          formIndex: '1',
          inputType: 'time',
          label: 'Appointment time',
          tableColumn: '5',
          tableLabel: 'Appointment time',
          fqn: 'referrals.appointmentTime'
        },
        {
          elementKey: 'status',
          formIndex: '1',
          inputType: 'select',
          label: 'Status',
          options: [
            {
              key: 'Active',
              text: 'Active'
            },
            {
              key: 'Discharged',
              text: 'Discharged'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Status',
          fqn: 'referrals.status'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a referral',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Referral name',
              ehr_list_index: '2',
              items: [
                'referralName'
              ]
            },
            {
              label: 'Referral profession',
              ehr_list_index: '3',
              items: [
                'referralProfession'
              ]
            },
            {
              label: 'Appointment date',
              ehr_list_index: '4',
              items: [
                'appointmentDate'
              ]
            },
            {
              label: 'Appointment time',
              ehr_list_index: '5',
              items: [
                'appointmentTime'
              ]
            },
            {
              label: 'Status',
              ehr_list_index: '6',
              items: [
                'status'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a referral',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group67',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group68',
                gIndex: '2',
                gChildren: [
                  'referralName',
                  'referralProfession',
                  'spacer69',
                  'appointmentDate',
                  'appointmentTime',
                  'status'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              referralName: '',
              referralProfession: '',
              appointmentDate: '',
              appointmentTime: '',
              status: ''
            }
          }
        }
      }
    },
    labRequisitions: {
      pageDataKey: 'labRequisitions',
      pageTitle: 'Lab requisitions',
      pIndex: '24',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'labRequisitions.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labRequisitions.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labRequisitions.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'labRequisitions.time'
        },
        {
          elementKey: 'requisition',
          assetBase: 'requisitions',
          assetName: 'lab-requisition-form.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Lab requisition',
          tableColumn: '2',
          fqn: 'labRequisitions.requisition'
        },
        {
          elementKey: 'requisition',
          assetBase: 'requisitions',
          assetName: 'medical-imaging-requisition.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Medical imaging requisition',
          tableColumn: '3',
          fqn: 'labRequisitions.requisition'
        },
        {
          elementKey: 'spacer72',
          formIndex: '1',
          inputType: 'spacer',
          tableColumn: '4',
          fqn: 'labRequisitions.spacer72'
        },
        {
          elementKey: 'ordered',
          formIndex: '1',
          inputType: 'day',
          label: 'Ordered day',
          tableColumn: '5',
          tableLabel: 'Ordered day',
          fqn: 'labRequisitions.ordered'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a lab requisition',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'requisition'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'requisition'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'spacer72'
              ]
            },
            {
              label: 'Ordered day',
              ehr_list_index: '5',
              items: [
                'ordered'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a lab requisition',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group70',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group71',
                gIndex: '2',
                gChildren: [
                  'requisition',
                  'requisition',
                  'spacer72',
                  'ordered'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              ordered: ''
            }
          }
        }
      }
    },
    medicationOrders: {
      pageDataKey: 'medicationOrders',
      pageTitle: 'Medication orders',
      pIndex: '25',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'medicationOrders.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'medicationOrders.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'medicationOrders.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'medicationOrders.time'
        },
        {
          elementKey: 'medication',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'lookahead',
          label: '<a href=\'/assets/static-databases/drug.txt\' target=\'_blank\'>Medication</a>',
          tableColumn: '2',
          tableLabel: 'Medication',
          fqn: 'medicationOrders.medication'
        },
        {
          elementKey: 'dose',
          formIndex: '1',
          inputType: 'text',
          label: 'Dose',
          tableColumn: '3',
          tableLabel: 'Dose',
          fqn: 'medicationOrders.dose'
        },
        {
          elementKey: 'route',
          formIndex: '1',
          inputType: 'select',
          label: 'Route',
          options: [
            {
              key: 'Oral',
              text: 'Oral'
            },
            {
              key: 'Sublingual',
              text: 'Sublingual'
            },
            {
              key: 'Inhalation',
              text: 'Inhalation'
            },
            {
              key: 'Nasal',
              text: 'Nasal'
            },
            {
              key: 'Rectal',
              text: 'Rectal'
            },
            {
              key: 'Vaginal',
              text: 'Vaginal'
            },
            {
              key: 'Intravenous',
              text: 'Intravenous'
            },
            {
              key: 'Intramuscular',
              text: 'Intramuscular'
            },
            {
              key: 'Subcutaneous',
              text: 'Subcutaneous'
            }
          ],
          tableColumn: '4',
          tableLabel: 'Route',
          fqn: 'medicationOrders.route'
        },
        {
          elementKey: 'startMeds',
          formIndex: '1',
          inputType: 'day',
          label: 'Start day',
          tableColumn: '5',
          tableLabel: 'Start day',
          fqn: 'medicationOrders.startMeds'
        },
        {
          elementKey: 'endMeds',
          formIndex: '1',
          inputType: 'day',
          label: 'End day',
          tableColumn: '6',
          tableCss: 'hr-table',
          tableLabel: 'End day',
          fqn: 'medicationOrders.endMeds'
        },
        {
          elementKey: 'administration',
          defaultValue: 'sched',
          formIndex: '1',
          inputType: 'select',
          label: 'Administration',
          options: [
            {
              key: 'sched',
              text: 'Scheduled'
            },
            {
              key: 'prn',
              text: 'PRN (as needed)'
            },
            {
              key: 'once',
              text: 'Once'
            },
            {
              key: 'stat',
              text: 'Stat'
            },
            {
              key: 'od',
              text: 'OD (Once a Day)'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Administration',
          fqn: 'medicationOrders.administration'
        },
        {
          elementKey: 'scheduled',
          formIndex: '1',
          inputType: 'select',
          label: 'Scheduled',
          options: [
            {
              key: 'BID / q12h',
              text: 'BID / q12h'
            },
            {
              key: 'TID',
              text: 'TID'
            },
            {
              key: 'q8h',
              text: 'q8h'
            },
            {
              key: 'QID',
              text: 'QID'
            },
            {
              key: 'q6h',
              text: 'q6h'
            },
            {
              key: 'q4h',
              text: 'q4h'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Scheduled',
          fqn: 'medicationOrders.scheduled'
        },
        {
          elementKey: 'prn1',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 1',
          tableColumn: '10',
          validation: 'time24',
          fqn: 'medicationOrders.prn1'
        },
        {
          elementKey: 'prn2',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 2',
          tableColumn: '11',
          validation: 'time24',
          fqn: 'medicationOrders.prn2'
        },
        {
          elementKey: 'prn3',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 3',
          tableColumn: '12',
          validation: 'time24',
          fqn: 'medicationOrders.prn3'
        },
        {
          elementKey: 'prn4',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 4',
          tableColumn: '13',
          validation: 'time24',
          fqn: 'medicationOrders.prn4'
        },
        {
          elementKey: 'prn5',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 5',
          tableColumn: '14',
          validation: 'time24',
          fqn: 'medicationOrders.prn5'
        },
        {
          elementKey: 'prn6',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 6',
          tableColumn: '15',
          validation: 'time24',
          fqn: 'medicationOrders.prn6'
        },
        {
          elementKey: 'once',
          formIndex: '1',
          inputType: 'text',
          label: 'Once',
          tableColumn: '10',
          fqn: 'medicationOrders.once'
        },
        {
          elementKey: 'stat',
          formIndex: '1',
          inputType: 'text',
          label: 'Stat',
          tableColumn: '10',
          fqn: 'medicationOrders.stat'
        },
        {
          elementKey: 'instructions',
          formIndex: '1',
          inputType: 'text',
          label: 'Instructions',
          tableColumn: '16',
          tableLabel: 'Instructions',
          fqn: 'medicationOrders.instructions'
        },
        {
          elementKey: 'reason',
          formIndex: '1',
          inputType: 'text',
          label: 'Reason',
          tableColumn: '17',
          tableLabel: 'Reason',
          fqn: 'medicationOrders.reason'
        },
        {
          elementKey: 'notes',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Notes',
          tableColumn: '18',
          tableLabel: 'Notes',
          fqn: 'medicationOrders.notes'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a medication order',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Medication',
              ehr_list_index: '2',
              items: [
                'medication'
              ]
            },
            {
              label: 'Dose',
              ehr_list_index: '3',
              items: [
                'dose'
              ]
            },
            {
              label: 'Route',
              ehr_list_index: '4',
              items: [
                'route'
              ]
            },
            {
              label: 'Start day',
              ehr_list_index: '5',
              items: [
                'startMeds'
              ]
            },
            {
              label: 'End day',
              tableCss: 'hr-table',
              ehr_list_index: '6',
              items: [
                'endMeds'
              ]
            },
            {
              label: 'Administration',
              ehr_list_index: '7',
              items: [
                'administration'
              ]
            },
            {
              label: 'Scheduled',
              ehr_list_index: '9',
              items: [
                'scheduled'
              ]
            },
            {
              ehr_list_index: '10',
              items: [
                'prn1',
                'once',
                'stat'
              ]
            },
            {
              ehr_list_index: '11',
              items: [
                'prn2'
              ]
            },
            {
              ehr_list_index: '12',
              items: [
                'prn3'
              ]
            },
            {
              ehr_list_index: '13',
              items: [
                'prn4'
              ]
            },
            {
              ehr_list_index: '14',
              items: [
                'prn5'
              ]
            },
            {
              ehr_list_index: '15',
              items: [
                'prn6'
              ]
            },
            {
              label: 'Instructions',
              ehr_list_index: '16',
              items: [
                'instructions'
              ]
            },
            {
              label: 'Reason',
              ehr_list_index: '17',
              items: [
                'reason'
              ]
            },
            {
              label: 'Notes',
              ehr_list_index: '18',
              items: [
                'notes'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a medication order',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group73',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group74',
                gIndex: '2',
                gChildren: [
                  'medication',
                  'dose',
                  'route',
                  'startMeds',
                  'endMeds'
                ]
              },
              {
                elementKey: 'adminGroup',
                gIndex: '3',
                gChildren: [
                  'administration'
                ]
              },
              {
                elementKey: 'schedGroup',
                dependentOn: 'visble:administration=sched',
                gIndex: '4',
                gChildren: [
                  'scheduled'
                ]
              },
              {
                elementKey: 'prnGroup',
                dependentOn: 'visble:administration=prn',
                gIndex: '5',
                gChildren: [
                  'prn1',
                  'prn2',
                  'prn3',
                  'prn4',
                  'prn5',
                  'prn6'
                ]
              },
              {
                elementKey: 'onceGroup',
                dependentOn: 'visble:administration=once',
                gIndex: '6',
                gChildren: [
                  'once'
                ]
              },
              {
                elementKey: 'statGroup',
                dependentOn: 'visble:administration=stat',
                gIndex: '7',
                gChildren: [
                  'stat'
                ]
              },
              {
                elementKey: 'ehr_group75',
                gIndex: '8',
                gChildren: [
                  'instructions',
                  'reason',
                  'notes'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              medication: '',
              dose: '',
              route: '',
              startMeds: '',
              endMeds: '',
              administration: 'sched',
              scheduled: '',
              prn1: '',
              prn2: '',
              prn3: '',
              prn4: '',
              prn5: '',
              prn6: '',
              once: '',
              stat: '',
              instructions: '',
              reason: '',
              notes: ''
            }
          }
        }
      }
    },
    medAdminRec: {
      pageDataKey: 'medAdminRec',
      pageTitle: 'Medication administration records',
      pIndex: '26',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'medStatus',
          formIndex: '1',
          inputType: 'select',
          label: 'Medication status',
          options: [
            {
              key: 'Active',
              text: 'Active'
            },
            {
              key: 'Hold',
              text: 'Hold'
            },
            {
              key: 'Discontinued',
              text: 'Discontinued'
            },
            {
              key: '',
              text: ''
            }
          ],
          tableColumn: '1',
          tableLabel: 'Medication status',
          fqn: 'medAdminRec.medStatus'
        },
        {
          elementKey: 'adminStatus',
          formIndex: '1',
          inputType: 'select',
          label: 'Administration status',
          options: [
            {
              key: 'Administered',
              text: 'Administered'
            },
            {
              key: 'Refused',
              text: 'Refused'
            },
            {
              key: 'Missed',
              text: 'Missed'
            },
            {
              key: 'Skipped',
              text: 'Skipped'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Administration status',
          fqn: 'medAdminRec.adminStatus'
        },
        {
          elementKey: 'medication',
          formIndex: '1',
          inputType: 'text',
          label: 'Medication',
          tableColumn: '3',
          tableLabel: 'Medication',
          fqn: 'medAdminRec.medication'
        },
        {
          elementKey: 'route',
          formIndex: '1',
          inputType: 'text',
          label: 'Route',
          tableColumn: '4',
          tableLabel: 'Route',
          fqn: 'medAdminRec.route'
        },
        {
          elementKey: 'todayPlan',
          formIndex: '1',
          inputType: 'text',
          label: 'Today\'s plan',
          options: [
            {
              key: '[Today\'s day] plan',
              text: '[Today\'s day] plan'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Today\'s plan',
          fqn: 'medAdminRec.todayPlan'
        },
        {
          elementKey: 'todayGiven',
          formIndex: '1',
          inputType: 'text',
          label: 'Today\'s given',
          options: [
            {
              key: '[Today\'s day] given',
              text: '[Today\'s day] given'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Today\'s given',
          fqn: 'medAdminRec.todayGiven'
        },
        {
          elementKey: 'administeredBy',
          formIndex: '1',
          inputType: 'text',
          label: 'Administered by',
          tableColumn: '7',
          tableLabel: 'Administered by',
          fqn: 'medAdminRec.administeredBy'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '8',
          tableLabel: 'Profession',
          fqn: 'medAdminRec.profession'
        },
        {
          elementKey: 'administeredTime',
          formIndex: '1',
          helperText: 'Enter time delivered or say if not delivered.',
          inputType: 'text',
          label: 'Administered time',
          tableColumn: '9',
          tableLabel: 'Administered time',
          fqn: 'medAdminRec.administeredTime',
          helperHtml: '<p>Enter time delivered or say if not delivered.</p>'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Administered',
          ehr_list: [
            {
              label: 'Medication status',
              ehr_list_index: '1',
              items: [
                'medStatus'
              ]
            },
            {
              label: 'Administration status',
              ehr_list_index: '2',
              items: [
                'adminStatus'
              ]
            },
            {
              label: 'Medication',
              ehr_list_index: '3',
              items: [
                'medication'
              ]
            },
            {
              label: 'Route',
              ehr_list_index: '4',
              items: [
                'route'
              ]
            },
            {
              label: 'Today\'s plan',
              ehr_list_index: '5',
              items: [
                'todayPlan'
              ]
            },
            {
              label: 'Today\'s given',
              ehr_list_index: '6',
              items: [
                'todayGiven'
              ]
            },
            {
              label: 'Administered by',
              ehr_list_index: '7',
              items: [
                'administeredBy'
              ]
            },
            {
              label: 'Profession',
              ehr_list_index: '8',
              items: [
                'profession'
              ]
            },
            {
              label: 'Administered time',
              ehr_list_index: '9',
              items: [
                'administeredTime'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Administered',
            formOption: 'customCode',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group76',
                gIndex: '1',
                gChildren: [
                  'medStatus',
                  'adminStatus',
                  'medication',
                  'route',
                  'todayPlan',
                  'todayGiven',
                  'administeredBy',
                  'profession',
                  'administeredTime'
                ]
              }
            ],
            ehr_data: {
              medStatus: '',
              adminStatus: '',
              medication: '',
              route: '',
              todayPlan: '',
              todayGiven: '',
              administeredBy: '',
              profession: '',
              administeredTime: ''
            }
          }
        }
      }
    },
    dischargeSummary: {
      pageDataKey: 'dischargeSummary',
      pageTitle: 'Discharge summary',
      pIndex: '27',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'admissionDay',
          defaultValue: 'Day 0',
          formIndex: '1',
          inputType: 'text',
          label: 'Admission day',
          fqn: 'dischargeSummary.admissionDay'
        },
        {
          elementKey: 'dischargingPhysician/np',
          formIndex: '1',
          inputType: 'select',
          label: 'Discharging physician/NP',
          options: [
            {
              key: 'Dr. Notley',
              text: 'Dr. Notley'
            },
            {
              key: 'Dr. Hunicutt',
              text: 'Dr. Hunicutt'
            },
            {
              key: 'Dr. Lee',
              text: 'Dr. Lee'
            },
            {
              key: 'Dr. Malik',
              text: 'Dr. Malik'
            },
            {
              key: 'Dr. Ng',
              text: 'Dr. Ng'
            },
            {
              key: 'Dr. Walker',
              text: 'Dr. Walker'
            },
            {
              key: 'Dr. Brooks',
              text: 'Dr. Brooks'
            }
          ],
          fqn: 'dischargeSummary.dischargingPhysician/np'
        },
        {
          elementKey: 'spacer78',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'dischargeSummary.spacer78'
        },
        {
          elementKey: 'clinicalSummary',
          formIndex: '1',
          formCss: 'grid-span-2-columns section-divider',
          inputType: 'textarea',
          label: 'Clinical summary',
          fqn: 'dischargeSummary.clinicalSummary'
        },
        {
          elementKey: 'dischargeDiagnosis',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Discharge diagnosis',
          fqn: 'dischargeSummary.dischargeDiagnosis'
        },
        {
          elementKey: 'dischargeEducation',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Discharge education',
          fqn: 'dischargeSummary.dischargeEducation'
        },
        {
          elementKey: 'spacer80',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'dischargeSummary.spacer80'
        },
        {
          elementKey: 'dischargeDay',
          formIndex: '2',
          inputType: 'day',
          label: 'Discharge day',
          fqn: 'dischargeSummary.dischargeDay'
        },
        {
          elementKey: 'dischargeTime',
          formIndex: '2',
          inputType: 'time',
          label: 'Discharge time',
          fqn: 'dischargeSummary.dischargeTime'
        },
        {
          elementKey: 'dischargedTo',
          formIndex: '2',
          inputType: 'select',
          label: 'Discharged to',
          options: [
            {
              key: 'Home',
              text: 'Home'
            },
            {
              key: 'Expired',
              text: 'Expired'
            },
            {
              key: 'Transferred',
              text: 'Transferred'
            }
          ],
          fqn: 'dischargeSummary.dischargedTo'
        },
        {
          elementKey: 'transferedTo',
          formIndex: '2',
          inputType: 'text',
          label: 'Transferred to',
          fqn: 'dischargeSummary.transferedTo'
        },
        {
          elementKey: 'leavingBy',
          formIndex: '2',
          inputType: 'select',
          label: 'Leaving by',
          options: [
            {
              key: 'Taxi',
              text: 'Taxi'
            },
            {
              key: 'Family',
              text: 'Family'
            },
            {
              key: 'Ambulance',
              text: 'Ambulance'
            },
            {
              key: 'Walk out/wheelchair',
              text: 'Walk out/wheelchair'
            }
          ],
          fqn: 'dischargeSummary.leavingBy'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group77',
              gIndex: '1',
              gChildren: [
                'admissionDay',
                'dischargingPhysician/np',
                'spacer78',
                'clinicalSummary'
              ]
            }
          ]
        },
        pageForm2: {
          elementKey: 'pageForm2',
          formKey: 'pageForm2',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group79',
              gIndex: '1',
              gChildren: [
                'dischargeDiagnosis',
                'dischargeEducation',
                'spacer80',
                'dischargeDay',
                'dischargeTime',
                'dischargedTo',
                'transferedTo',
                'leavingBy'
              ]
            }
          ]
        }
      }
    },
    billing: {
      pageDataKey: 'billing',
      pageTitle: 'Billing',
      pIndex: '28',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'paymentType',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Payment type',
          options: [
            {
              key: 'MSP',
              text: 'MSP'
            },
            {
              key: 'Third party',
              text: 'Third party'
            },
            {
              key: 'Federal',
              text: 'Federal'
            }
          ],
          fqn: 'billing.paymentType'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group81',
              gIndex: '1',
              gChildren: [
                'paymentType'
              ]
            }
          ]
        }
      }
    },
    integumentaryAssessment: {
      pageDataKey: 'integumentaryAssessment',
      pageTitle: 'Integumentary assessment',
      pIndex: '42',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'integumentaryAssessment.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'integumentaryAssessment.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'integumentaryAssessment.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'integumentaryAssessment.time'
        },
        {
          elementKey: 'woundLocation',
          formIndex: '1',
          inputType: 'select',
          label: 'Wound location',
          options: [
            {
              key: 'Head',
              text: 'Head'
            },
            {
              key: 'Face',
              text: 'Face'
            },
            {
              key: 'Neck',
              text: 'Neck'
            },
            {
              key: 'Chest',
              text: 'Chest'
            },
            {
              key: 'Arm (Left)',
              text: 'Arm (Left)'
            },
            {
              key: 'Arm (Right)',
              text: 'Arm (Right)'
            },
            {
              key: 'Hand (Left)',
              text: 'Hand (Left)'
            },
            {
              key: 'Hand (Right)',
              text: 'Hand (Right)'
            },
            {
              key: 'Abdomen',
              text: 'Abdomen'
            },
            {
              key: 'Back',
              text: 'Back'
            },
            {
              key: 'Pelvis',
              text: 'Pelvis'
            },
            {
              key: 'Buttock',
              text: 'Buttock'
            },
            {
              key: 'Leg (Left)',
              text: 'Leg (Left)'
            },
            {
              key: 'Leg (Right)',
              text: 'Leg (Right)'
            },
            {
              key: 'Foot (Left)',
              text: 'Foot (Left)'
            },
            {
              key: 'Foot (Right)',
              text: 'Foot (Right)'
            },
            {
              key: '',
              text: ''
            }
          ],
          tableColumn: '2',
          tableLabel: 'Wound location',
          fqn: 'integumentaryAssessment.woundLocation'
        },
        {
          elementKey: 'woundLabel',
          formIndex: '1',
          inputType: 'select',
          label: 'Wound label',
          options: [
            {
              key: 'Wound A',
              text: 'Wound A'
            },
            {
              key: 'Wound B',
              text: 'Wound B'
            },
            {
              key: 'Wound C',
              text: 'Wound C'
            },
            {
              key: 'Wound D',
              text: 'Wound D'
            }
          ],
          tableColumn: '3',
          tableLabel: 'Wound label',
          fqn: 'integumentaryAssessment.woundLabel'
        },
        {
          elementKey: 'goalOfCare',
          formIndex: '1',
          inputType: 'select',
          label: 'Goal of care',
          options: [
            {
              key: 'To heal',
              text: 'To heal'
            },
            {
              key: 'To maintain',
              text: 'To maintain'
            },
            {
              key: 'To monitor/manage',
              text: 'To monitor/manage'
            }
          ],
          tableColumn: '4',
          tableCss: 'hr-table',
          tableLabel: 'Goal of care',
          fqn: 'integumentaryAssessment.goalOfCare'
        },
        {
          elementKey: 'woundDayOnset',
          formIndex: '1',
          inputType: 'day',
          label: 'Wound day of onset',
          tableColumn: '5',
          tableLabel: 'Wound day of onset',
          fqn: 'integumentaryAssessment.woundDayOnset'
        },
        {
          elementKey: 'stageDay',
          formIndex: '1',
          inputType: 'day',
          label: 'Case day',
          tableColumn: '6',
          fqn: 'integumentaryAssessment.stageDay'
        },
        {
          elementKey: 'stageType',
          formIndex: '1',
          helperText: 'Pressure Injury Stage 1 Intact skin with localized nonblanchable erythema; darkly pigmented skin may not show visible blanching but will appear different than the colour of surrounding skin.\nPressure Injury Stage 2 Partial thickness wound presenting as a shallow open ulcer with a red / pink wound bed, slough may be present but does not obscure the depth of tissue loss; may also present as an intact or open/ruptured serum-filled or serosanguineous filled blister.\nPressure Injury Stage 3 Full thickness wound; subcutaneous tissue may be visible but bone, tendon and muscle are not exposed; may include undermining and/or sinus tracks; slough or eschar may be present but does not obscure the depth of tissue loss.\nPressure Injury Stage 4 Full thickness wound with exposed bone, tendon or muscle; often includes undermining and/or sinus tracks; slough or eschar may be present on some parts of the wound bed but does not obscure the depth of tissue loss.\nPressure Injury Unstageable  A wound in which the wound bed is covered by sufficient slough and / or eschar to preclude staging.\nPressure Injury Deep Tissue Injury  A localized purple or maroon area of intact skin or a blood filled blister that occur when underlying soft tissue is damaged from friction or shear.\nSurgical Wounds Secondary intention: Incision has dehisced and surgical closure is not possible; wounds must heal by granulation\nSkin Tear: Skin tears are the result of trauma caused by shearing, friction, or blunt force to the skin. Consider risk factors (i.e.: advanced age, immobility, inadequate hydration/nutrition, falls)\nAbscess: A local collection of purulent and/or sanguineous drainage that may be incised and drained.\nBurn: Tissue loss/damage as a result from thermal, chemical, electrical, and radiation sources.\nVenous Ulcer: Caused by venous insufficiency due to valve dysfunction, complete or partial blockage of the deep veins, and / or failure of the calf muscle pump.\nArterial Ulcer: Caused by a disruption to arterial blood flow leading to moderate / severe tissue ischemia.\nMixed Arterial/Venous Ulcer: Caused by both venous insufficiency and disrupted arterial blood flow.\nDiabetic/Neuropathic Ulcers: A result of neuropathy, structural foot changes, and/or altered blood flow related to diabetes mellitus (or alcoholism, renal failure, HIV, late stage syphilis, trauma and surgery).\n',
          inputType: 'checkset',
          label: 'Wound Etiology/Type',
          options: [
            {
              key: 'stage1',
              text: 'Pressure Injury Stage 1'
            },
            {
              key: 'stage2',
              text: 'Pressure Injury Stage 2'
            },
            {
              key: 'stage3',
              text: 'Pressure Injury Stage 3'
            },
            {
              key: 'stage4',
              text: 'Pressure Injury Stage 4'
            },
            {
              key: 'unstageable',
              text: 'Pressure Injury Unstageable'
            },
            {
              key: 'deep',
              text: 'Pressure Injury Deep Tissue Injury'
            },
            {
              key: 'surgical',
              text: 'Surgical Secondary Intent'
            },
            {
              key: 'tear',
              text: 'Skin Tear'
            },
            {
              key: 'abscess',
              text: 'Abscess'
            },
            {
              key: 'burn',
              text: 'Burn'
            },
            {
              key: 'venous',
              text: 'Venous Ulcer'
            },
            {
              key: 'arterial',
              text: 'Arterial Ulcer'
            },
            {
              key: 'mixedUlcer',
              text: 'Mixed Venous/Arterial Ulcer'
            },
            {
              key: 'diabetic',
              text: 'Diabetic/Neuropathic Ulcer'
            },
            {
              key: 'other',
              text: 'Other'
            }
          ],
          tableColumn: '7',
          fqn: 'integumentaryAssessment.stageType',
          helperHtml: '<p>Pressure Injury Stage 1 Intact skin with localized nonblanchable erythema; darkly pigmented skin may not show visible blanching but will appear different than the colour of surrounding skin.</p>\n<p>Pressure Injury Stage 2 Partial thickness wound presenting as a shallow open ulcer with a red / pink wound bed, slough may be present but does not obscure the depth of tissue loss; may also present as an intact or open/ruptured serum-filled or serosanguineous filled blister.</p>\n<p>Pressure Injury Stage 3 Full thickness wound; subcutaneous tissue may be visible but bone, tendon and muscle are not exposed; may include undermining and/or sinus tracks; slough or eschar may be present but does not obscure the depth of tissue loss.</p>\n<p>Pressure Injury Stage 4 Full thickness wound with exposed bone, tendon or muscle; often includes undermining and/or sinus tracks; slough or eschar may be present on some parts of the wound bed but does not obscure the depth of tissue loss.</p>\n<p>Pressure Injury Unstageable  A wound in which the wound bed is covered by sufficient slough and / or eschar to preclude staging.</p>\n<p>Pressure Injury Deep Tissue Injury  A localized purple or maroon area of intact skin or a blood filled blister that occur when underlying soft tissue is damaged from friction or shear.</p>\n<p>Surgical Wounds Secondary intention: Incision has dehisced and surgical closure is not possible; wounds must heal by granulation</p>\n<p>Skin Tear: Skin tears are the result of trauma caused by shearing, friction, or blunt force to the skin. Consider risk factors (i.e.: advanced age, immobility, inadequate hydration/nutrition, falls)</p>\n<p>Abscess: A local collection of purulent and/or sanguineous drainage that may be incised and drained.</p>\n<p>Burn: Tissue loss/damage as a result from thermal, chemical, electrical, and radiation sources.</p>\n<p>Venous Ulcer: Caused by venous insufficiency due to valve dysfunction, complete or partial blockage of the deep veins, and / or failure of the calf muscle pump.</p>\n<p>Arterial Ulcer: Caused by a disruption to arterial blood flow leading to moderate / severe tissue ischemia.</p>\n<p>Mixed Arterial/Venous Ulcer: Caused by both venous insufficiency and disrupted arterial blood flow.</p>\n<p>Diabetic/Neuropathic Ulcers: A result of neuropathy, structural foot changes, and/or altered blood flow related to diabetes mellitus (or alcoholism, renal failure, HIV, late stage syphilis, trauma and surgery).</p>\n<p></p>'
        },
        {
          elementKey: 'stageOther',
          dependentOn: 'visble:stageType=other',
          formIndex: '1',
          inputType: 'text',
          label: 'Other',
          tableColumn: '8',
          fqn: 'integumentaryAssessment.stageOther'
        },
        {
          elementKey: 'length',
          formIndex: '1',
          inputType: 'text',
          label: 'Length cm.mm',
          tableColumn: '9',
          tableLabel: 'Length cm.mm',
          fqn: 'integumentaryAssessment.length'
        },
        {
          elementKey: 'width',
          formIndex: '1',
          inputType: 'text',
          label: 'Width cm.mm',
          tableColumn: '10',
          tableLabel: 'Width cm.mm',
          fqn: 'integumentaryAssessment.width'
        },
        {
          elementKey: 'depth',
          formIndex: '1',
          inputType: 'text',
          label: 'Depth cm.mm',
          tableColumn: '11',
          tableCss: 'hr-table',
          tableLabel: 'Depth cm.mm',
          fqn: 'integumentaryAssessment.depth'
        },
        {
          elementKey: 'sinusDepth1',
          formIndex: '1',
          inputType: 'text',
          label: 'Sinus/tunnel 1 depth cm.mm',
          tableColumn: '12',
          tableLabel: 'Sinus/tunnel 1 depth cm.mm',
          fqn: 'integumentaryAssessment.sinusDepth1'
        },
        {
          elementKey: 'sinusDepthLocation1',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '13',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.sinusDepthLocation1',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'spacer49',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer49'
        },
        {
          elementKey: 'sinusDepth2',
          formIndex: '1',
          inputType: 'text',
          label: 'Sinus/tunnel 2 depth cm.mm',
          tableColumn: '14',
          tableLabel: 'Sinus/tunnel 2 depth cm.mm',
          fqn: 'integumentaryAssessment.sinusDepth2'
        },
        {
          elementKey: 'sinusDepthLocation2',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '15',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.sinusDepthLocation2',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'spacer50',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer50'
        },
        {
          elementKey: 'underminingDepth1',
          formIndex: '1',
          inputType: 'text',
          label: 'Undermining 1 depth cm.mm',
          tableColumn: '16',
          tableLabel: 'Undermining 1 depth cm.mm',
          fqn: 'integumentaryAssessment.underminingDepth1'
        },
        {
          elementKey: 'underminingDepthLocation1A',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '17',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.underminingDepthLocation1A',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'underminingDepthLocation1B',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '18',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.underminingDepthLocation1B',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'underminingDepth2',
          formIndex: '1',
          inputType: 'text',
          label: 'Undermining 2 depth cm.mm',
          tableColumn: '19',
          tableLabel: 'Undermining 2 depth cm.mm',
          fqn: 'integumentaryAssessment.underminingDepth2'
        },
        {
          elementKey: 'underminingDepthLocation2A',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '20',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.underminingDepthLocation2A',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'underminingDepthLocation2B',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '21',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.underminingDepthLocation2B',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'pinkred',
          formIndex: '1',
          inputType: 'select',
          label: '% Pink/red',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '22',
          tableLabel: '% Pink/red',
          fqn: 'integumentaryAssessment.pinkred'
        },
        {
          elementKey: 'granulation',
          formIndex: '1',
          helperText: 'Red pebbly',
          inputType: 'select',
          label: '% Granulation',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '23',
          tableLabel: '% Granulation',
          fqn: 'integumentaryAssessment.granulation',
          helperHtml: '<p>Red pebbly</p>'
        },
        {
          elementKey: 'slough',
          formIndex: '1',
          inputType: 'select',
          label: '% Slough',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '24',
          tableLabel: '% Slough',
          fqn: 'integumentaryAssessment.slough'
        },
        {
          elementKey: 'eschar',
          formIndex: '1',
          inputType: 'select',
          label: '% Eschar (soft, boggy)',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '24',
          tableLabel: '% Eschar (soft, boggy)',
          fqn: 'integumentaryAssessment.eschar'
        },
        {
          elementKey: 'eschar',
          formIndex: '1',
          inputType: 'select',
          label: '% Eschar (dry, stable)',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '25',
          tableLabel: '% Eschar (dry, stable)',
          fqn: 'integumentaryAssessment.eschar'
        },
        {
          elementKey: 'foreign',
          formIndex: '1',
          helperText: 'Sutures, mesh, hardware',
          inputType: 'select',
          label: '% Foreign body',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '26',
          tableLabel: '% Foreign body',
          fqn: 'integumentaryAssessment.foreign',
          helperHtml: '<p>Sutures, mesh, hardware</p>'
        },
        {
          elementKey: 'underlying',
          formIndex: '1',
          helperText: 'Faschia, tendon, bone',
          inputType: 'select',
          label: '% Underlying structures',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '27',
          tableLabel: '% Underlying structures',
          fqn: 'integumentaryAssessment.underlying',
          helperHtml: '<p>Faschia, tendon, bone</p>'
        },
        {
          elementKey: 'notVisible',
          formIndex: '1',
          inputType: 'select',
          label: '% Not visible',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '28',
          tableLabel: '% Not visible',
          fqn: 'integumentaryAssessment.notVisible'
        },
        {
          elementKey: 'other',
          formIndex: '1',
          inputType: 'select',
          label: '% Other',
          options: [
            {
              key: '10=10%',
              text: '10=10%'
            },
            {
              key: '20=20%',
              text: '20=20%'
            },
            {
              key: '30=30%',
              text: '30=30%'
            },
            {
              key: '40=40%',
              text: '40=40%'
            },
            {
              key: '50=50%',
              text: '50=50%'
            },
            {
              key: '60=60%',
              text: '60=60%'
            },
            {
              key: '70=70%',
              text: '70=70%'
            },
            {
              key: '80=80%',
              text: '80=80%'
            },
            {
              key: '90=90%',
              text: '90=90%'
            },
            {
              key: '100=100%',
              text: '100=100%'
            }
          ],
          passToFunction: 'woundBedCalculation',
          tableColumn: '29',
          tableLabel: '% Other',
          fqn: 'integumentaryAssessment.other'
        },
        {
          elementKey: 'woundBedCalculation',
          defaultValue: '0',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'Wound bed calculation',
          tableColumn: '30',
          tableCss: 'hr-table',
          tableLabel: 'Wound bed calculation',
          validation: 'range(0,100)',
          fqn: 'integumentaryAssessment.woundBedCalculation'
        },
        {
          elementKey: 'exudateAmount',
          formIndex: '1',
          inputType: 'select',
          label: 'Exudate amount',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Scant/small',
              text: 'Scant/small'
            },
            {
              key: 'Moderate',
              text: 'Moderate'
            },
            {
              key: 'Large/copious',
              text: 'Large/copious'
            }
          ],
          tableColumn: '31',
          tableLabel: 'Exudate amount',
          fqn: 'integumentaryAssessment.exudateAmount'
        },
        {
          elementKey: 'exudateType',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Exudate type',
          options: [
            {
              key: 'Serous',
              text: 'Serous'
            },
            {
              key: 'Sanguineous',
              text: 'Sanguineous'
            },
            {
              key: 'Purulent',
              text: 'Purulent'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '32',
          tableCss: 'hr-table',
          tableLabel: 'Exudate type',
          fqn: 'integumentaryAssessment.exudateType'
        },
        {
          elementKey: 'odour',
          formIndex: '1',
          inputType: 'select',
          label: 'Odour present after cleansing',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '33',
          tableCss: 'hr-table',
          tableLabel: 'Odour present after cleansing',
          fqn: 'integumentaryAssessment.odour'
        },
        {
          elementKey: 'woundEdge',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Wound edge',
          options: [
            {
              key: 'Attached (flush with wound bed or sloping edge)',
              text: 'Attached (flush with wound bed or sloping edge)'
            },
            {
              key: 'Non-attached (edge appears as a cliff)',
              text: 'Non-attached (edge appears as a cliff)'
            },
            {
              key: 'Rolled (curled under)',
              text: 'Rolled (curled under)'
            },
            {
              key: 'Epithelialization',
              text: 'Epithelialization'
            }
          ],
          tableColumn: '34',
          tableLabel: 'Wound edge',
          fqn: 'integumentaryAssessment.woundEdge'
        },
        {
          elementKey: 'periWoundSkin',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Peri-wound skin',
          options: [
            {
              key: 'Intact',
              text: 'Intact'
            },
            {
              key: 'Erythema (reddened) in cm',
              text: 'Erythema (reddened) in cm'
            },
            {
              key: 'Indurated (firmness around wound) in cm',
              text: 'Indurated (firmness around wound) in cm'
            },
            {
              key: 'Macerated (white, waterlogged)',
              text: 'Macerated (white, waterlogged)'
            },
            {
              key: 'Excoriated/Denuded (superficial loss of tissue)',
              text: 'Excoriated/Denuded (superficial loss of tissue)'
            },
            {
              key: 'Callused',
              text: 'Callused'
            },
            {
              key: 'Fragile',
              text: 'Fragile'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '35',
          tableCss: 'hr-table',
          tableLabel: 'Peri-wound skin',
          fqn: 'integumentaryAssessment.periWoundSkin'
        },
        {
          elementKey: 'woundPain',
          formIndex: '1',
          helperText: 'Scored from 10 point analogue Pain Scale\nSee Pain Assessment for details',
          inputType: 'text',
          label: 'Wound pain',
          suffix: '/10',
          tableColumn: '36',
          tableCss: 'hr-table',
          tableLabel: 'Wound pain',
          validation: 'range(0,10)',
          fqn: 'integumentaryAssessment.woundPain',
          helperHtml: '<p>Scored from 10 point analogue Pain Scale</p>\n<p>See Pain Assessment for details</p>'
        },
        {
          elementKey: 'packingOut',
          formIndex: '1',
          helperText: 'Any depth 1cm or greater, count packing pieces',
          inputType: 'text',
          label: 'Packing out',
          tableColumn: '37',
          tableLabel: 'Packing out',
          fqn: 'integumentaryAssessment.packingOut',
          helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
        },
        {
          elementKey: 'packinIn',
          formIndex: '1',
          helperText: 'Any depth 1cm or greater, count packing pieces',
          inputType: 'text',
          label: 'Packing in',
          tableColumn: '38',
          tableCss: 'hr-table',
          tableLabel: 'Packing in',
          fqn: 'integumentaryAssessment.packinIn',
          helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
        },
        {
          elementKey: 'spacer53',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer53'
        },
        {
          elementKey: 'treatmentComplete',
          formIndex: '1',
          inputType: 'select',
          label: 'Treatments as per plan of care',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '39',
          tableLabel: 'Treatments as per plan of care',
          fqn: 'integumentaryAssessment.treatmentComplete'
        }
      ],
      recHeader: true,
      generated: '2020-07-30T16:48:41-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an integumentary assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Wound location',
              ehr_list_index: '2',
              items: [
                'woundLocation'
              ]
            },
            {
              label: 'Wound label',
              ehr_list_index: '3',
              items: [
                'woundLabel'
              ]
            },
            {
              label: 'Goal of care',
              tableCss: 'hr-table',
              ehr_list_index: '4',
              items: [
                'goalOfCare'
              ]
            },
            {
              label: 'Wound day of onset',
              ehr_list_index: '5',
              items: [
                'woundDayOnset'
              ]
            },
            {
              ehr_list_index: '6',
              items: [
                'stageDay'
              ]
            },
            {
              ehr_list_index: '7',
              items: [
                'stageType'
              ]
            },
            {
              ehr_list_index: '8',
              items: [
                'stageOther'
              ]
            },
            {
              label: 'Length cm.mm',
              ehr_list_index: '9',
              items: [
                'length'
              ]
            },
            {
              label: 'Width cm.mm',
              ehr_list_index: '10',
              items: [
                'width'
              ]
            },
            {
              label: 'Depth cm.mm',
              tableCss: 'hr-table',
              ehr_list_index: '11',
              items: [
                'depth'
              ]
            },
            {
              label: 'Sinus/tunnel 1 depth cm.mm',
              ehr_list_index: '12',
              items: [
                'sinusDepth1'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '13',
              items: [
                'sinusDepthLocation1'
              ]
            },
            {
              label: 'Sinus/tunnel 2 depth cm.mm',
              ehr_list_index: '14',
              items: [
                'sinusDepth2'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '15',
              items: [
                'sinusDepthLocation2'
              ]
            },
            {
              label: 'Undermining 1 depth cm.mm',
              ehr_list_index: '16',
              items: [
                'underminingDepth1'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '17',
              items: [
                'underminingDepthLocation1A'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '18',
              items: [
                'underminingDepthLocation1B'
              ]
            },
            {
              label: 'Undermining 2 depth cm.mm',
              ehr_list_index: '19',
              items: [
                'underminingDepth2'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '20',
              items: [
                'underminingDepthLocation2A'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '21',
              items: [
                'underminingDepthLocation2B'
              ]
            },
            {
              label: '% Pink/red',
              ehr_list_index: '22',
              items: [
                'pinkred'
              ]
            },
            {
              label: '% Granulation',
              ehr_list_index: '23',
              items: [
                'granulation'
              ]
            },
            {
              label: '% Slough',
              ehr_list_index: '24',
              items: [
                'slough',
                'eschar'
              ]
            },
            {
              label: '% Eschar (dry, stable)',
              ehr_list_index: '25',
              items: [
                'eschar'
              ]
            },
            {
              label: '% Foreign body',
              ehr_list_index: '26',
              items: [
                'foreign'
              ]
            },
            {
              label: '% Underlying structures',
              ehr_list_index: '27',
              items: [
                'underlying'
              ]
            },
            {
              label: '% Not visible',
              ehr_list_index: '28',
              items: [
                'notVisible'
              ]
            },
            {
              label: '% Other',
              ehr_list_index: '29',
              items: [
                'other'
              ]
            },
            {
              label: 'Wound bed calculation',
              tableCss: 'hr-table',
              ehr_list_index: '30',
              items: [
                'woundBedCalculation'
              ]
            },
            {
              label: 'Exudate amount',
              ehr_list_index: '31',
              items: [
                'exudateAmount'
              ]
            },
            {
              label: 'Exudate type',
              tableCss: 'hr-table',
              ehr_list_index: '32',
              items: [
                'exudateType'
              ]
            },
            {
              label: 'Odour present after cleansing',
              tableCss: 'hr-table',
              ehr_list_index: '33',
              items: [
                'odour'
              ]
            },
            {
              label: 'Wound edge',
              ehr_list_index: '34',
              items: [
                'woundEdge'
              ]
            },
            {
              label: 'Peri-wound skin',
              tableCss: 'hr-table',
              ehr_list_index: '35',
              items: [
                'periWoundSkin'
              ]
            },
            {
              label: 'Wound pain',
              tableCss: 'hr-table',
              ehr_list_index: '36',
              items: [
                'woundPain'
              ]
            },
            {
              label: 'Packing out',
              ehr_list_index: '37',
              items: [
                'packingOut'
              ]
            },
            {
              label: 'Packing in',
              tableCss: 'hr-table',
              ehr_list_index: '38',
              items: [
                'packinIn'
              ]
            },
            {
              label: 'Treatments as per plan of care',
              ehr_list_index: '39',
              items: [
                'treatmentComplete'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an integumentary assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group47',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group48',
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'woundLocation',
                  'woundLabel',
                  'goalOfCare',
                  'woundDayOnset'
                ]
              },
              {
                elementKey: 'woundTypeGroup',
                label: 'Wound Etiology/Type',
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'stageDay',
                  'stageType',
                  'stageOther'
                ]
              },
              {
                elementKey: 'woundMeasureGroup',
                label: 'Wound measurements',
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'length',
                  'width',
                  'depth',
                  'sinusDepth1',
                  'sinusDepthLocation1',
                  'spacer49',
                  'sinusDepth2',
                  'sinusDepthLocation2',
                  'spacer50',
                  'underminingDepth1',
                  'underminingDepthLocation1A',
                  'underminingDepthLocation1B',
                  'underminingDepth2',
                  'underminingDepthLocation2A',
                  'underminingDepthLocation2B'
                ]
              },
              {
                elementKey: 'woundBed',
                label: 'Wound bed',
                formCss: 'section-divider',
                gIndex: '5',
                gChildren: [
                  'pinkred',
                  'granulation',
                  'slough',
                  'eschar',
                  'eschar',
                  'foreign',
                  'underlying',
                  'notVisible',
                  'other',
                  'woundBedCalculation'
                ]
              },
              {
                elementKey: 'ehr_group51',
                label: 'Wound Exudate & Odour',
                formCss: 'section-divider',
                gIndex: '6',
                gChildren: [
                  'exudateAmount',
                  'exudateType',
                  'odour',
                  'woundEdge',
                  'periWoundSkin',
                  'woundPain'
                ]
              },
              {
                elementKey: 'ehr_group52',
                label: 'Treatment',
                formCss: 'section-divider',
                gIndex: '7',
                gChildren: [
                  'packingOut',
                  'packinIn',
                  'spacer53',
                  'treatmentComplete'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              woundLocation: '',
              woundLabel: '',
              goalOfCare: '',
              woundDayOnset: '',
              stageDay: '',
              stageType: '',
              stageOther: '',
              length: '',
              width: '',
              depth: '',
              sinusDepth1: '',
              sinusDepthLocation1: '',
              sinusDepth2: '',
              sinusDepthLocation2: '',
              underminingDepth1: '',
              underminingDepthLocation1A: '',
              underminingDepthLocation1B: '',
              underminingDepth2: '',
              underminingDepthLocation2A: '',
              underminingDepthLocation2B: '',
              pinkred: '',
              granulation: '',
              slough: '',
              eschar: '',
              foreign: '',
              underlying: '',
              notVisible: '',
              other: '',
              woundBedCalculation: '0',
              exudateAmount: '',
              exudateType: '',
              odour: '',
              woundEdge: '',
              periWoundSkin: '',
              woundPain: '',
              packingOut: '',
              packinIn: '',
              treatmentComplete: ''
            }
          }
        }
      }
    }
  }
}