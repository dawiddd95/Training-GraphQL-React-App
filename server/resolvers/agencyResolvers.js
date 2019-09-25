export default {
   Query: {
      allAgencies: (parent, args, {models}) => models.Agency.findAll(),
      getAgency: (parent, {id}, {models}) => models.Agency.findOne({ where: {id} })
   }, 
   // Agency: {
   //    // podajemy pole, które zwraca tablicę z relacji w tym przypadku travels: [Travel!] więc => travels:
   //    travels: (parent, args, context, info) => (
   //       travelsList.filter(travel => travel.agency_id == parent.id)
   //    )
   // }
   Mutation: {
      createAgency: (parent, {name}, {models}) => models.Agency.create({name}), 
      updateAgency: (parent, {id, name}, {models}) => models.Agency.update({name}, { where: {id} }),
      deleteAgency: (parent, {id}, {models}) => models.Agency.destroy({ where: {id} })
   }
}

// problemem były te same nazwy w plikach obu resolverów w Query: {} oba miały Query: {travels: } 