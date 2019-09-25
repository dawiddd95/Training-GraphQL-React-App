// to samo z emailami dac lik do services email i dac export i deklaracja tych settingow do verify i podspodem do forgot-password tez jako export etc.
// przy eksportach export const cos => robimy importy => import {cos} from 
// Uzycie takiego importu to => cos || lub || cos()

import Sequelize from 'sequelize'

const Op = Sequelize.Op;

export const batchAgencies = async (keys, models) => {
  // Zbiera w kolekcje wszystkich agencji (wlascicieli traveli), których travele są pokazane 
  const agencies = await models.Agency.findAll({
    where: {
      id: {
        [Op.in]: keys
      },
    },
  })

  return keys.map(key => agencies.find(agency => agency.id === key))
}