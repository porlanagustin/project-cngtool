import Table from '../../../common/table/Table';

const data = [
  { nombre: 'The Flowers Company', web: 'www.tfc.com', usuario: 'amex', password: 'concierge22', email: 'info@tfc.com', telefono: '123456789', alcance: 'Global', recomendacion: 'Platinum' },
  { nombre: 'The Gift Store', web: 'www.tgs.com', usuario: 'amex', password: 'concierge22', email: 'info@tgs.com', telefono: '987654321', alcance: 'Global', recomendacion: 'Todos los socios' },
  { nombre: 'ArgenGifts', web: 'www.argengifts.com', usuario: 'user7', password: 'giftPass', email: 'info@argengifts.com', telefono: '555-1111', alcance: 'Argentina', recomendacion: 'Gold' },
  { nombre: 'BairesFleurs', web: 'www.bairesfleurs.com', usuario: 'user8', password: 'fleursPass', email: 'info@bairesfleurs.com', telefono: '555-2222', alcance: 'Argentina', recomendacion: 'Silver' },
  { nombre: 'GlobalTechLatAm', web: 'www.globaltechlatam.com', usuario: 'user9', password: 'techPass', email: 'info@globaltechlatam.com', telefono: '555-3333', alcance: 'Latinoamérica', recomendacion: 'Bronze' },
  { nombre: 'ArgenTech', web: 'www.argentech.com', usuario: 'user10', password: 'argentechPass', email: 'info@argentech.com', telefono: '555-4444', alcance: 'Argentina', recomendacion: 'Platinum' },
  { nombre: 'Baires Logistics', web: 'www.baireslogistics.com', usuario: 'user11', password: 'logisticsPass', email: 'info@baireslogistics.com', telefono: '555-5555', alcance: 'Buenos Aires', recomendacion: 'Gold' },
  { nombre: 'US Solutions', web: 'www.ussolutions.com', usuario: 'user12', password: 'usPass', email: 'info@ussolutions.com', telefono: '555-6666', alcance: 'EEUU', recomendacion: 'Silver' }
];



const Gifts = () => {
    return (
        <Table data={data}></Table>
      );
};

export default Gifts;