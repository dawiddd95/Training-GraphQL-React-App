export default {
   Query: {
      allTravels: (parent, args, {models}) => models.Travel.findAll(),
      getTravel: (parent, {id}, {models}) => models.Travel.findOne({ where: {id} })    
   },
   Travel: {
      agency: async (travel, args, { loaders }) => await loaders.agency.load(travel.agencyId)
   },
   Mutation: {
      // pole relacji przyjmował by context gdyby była zależność zalogowany user dodaje coś
      // W tym przypadku tworzenie przyjmuje relacje dla uproszczenia sprawy, bo moglibysmy zrobic ze agencja sie loguje i dodaje, ale nie jest to przedmiotem projektu
      createTravel: async (parent, {name, days, type, start, agencyId}, {models}) => (
         models.Travel.create({name, days, type, start, agencyId})
      ),
      updateTravel: (parent, {id, name, days, type, start, agencyId}, {models}) => (
         models.Travel.update({name, days, type, start, agencyId}, { where: {id} })
      ),
      deleteTravel: (parent, {id}, {models}) => models.Travel.destroy({ where: {id} })
   }
}
