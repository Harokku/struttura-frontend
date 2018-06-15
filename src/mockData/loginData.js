export const testUser = {
  surname: 'Crenna',
  name: 'Simone',
  role: 'Dipendente',
  regNumber: '823',
  mobile: '+39 349 1065 428',
  mail: 'crenna.simone@gmail.com',
  driverLicense: 'Categoria 5',
  deadLines: [
    {
      deadLineName: 'Patente 5',
      deadLineHeader: 'Patente di guida CRI',
      expiredate: '2018-10-10',
      instructions: [
        {
          label: 'Documenti necessari',
          body: [
            '2 Fototessere',
            `Carta d'identità`
          ]
        },
        {
          label: 'Esami necessari',
          body: [
            'Visita Medica',
            'Prova riflessi'
          ]
        }
      ]
    },
    {
      deadLineName: 'DAE',
      deadLineHeader: 'Certificazione DAE',
      expiredate: '2018-01-01',
      instructions: [
        {
          label: 'Esami necessari',
          body: [
            'ReTraining',
          ]
        }
      ]
    }
  ]
}