import Table from '../../common/table/Table';

const data = [
  { nombre: 'Blacklane', web: 'www.blacklane.com', usuario: 'amex', password: 'concierge22', email: 'info@blacklane.com', telefono: '123456789', alcance: 'Global', recomendacion: 'Todos los socios' },
  { nombre: 'Relier', web: 'www.relier.com', usuario: 'amex', password: 'concierge22', email: 'info@relier.com', telefono: '987654321', alcance: 'Global', recomendacion: 'Todos los socios' },
  { nombre: 'El Rapido Ezeiza', web: 'www.elrapidoezeiza.com', usuario: 'amex', password: 'concierge22', email: 'info@elrapidoezeiza.com', telefono: '987654321', alcance: 'Buenos Aires', recomendacion: 'Platinum' },
  { nombre: 'Global Tech Solutions', web: 'www.globaltech.com', usuario: 'user1', password: 'securePass', email: 'info@globaltech.com', telefono: '555-1234', alcance: 'Global', recomendacion: 'Silver' },
  { nombre: 'US Innovations', web: 'www.usinnovations.com', usuario: 'user2', password: 'strongPassword', email: 'info@usinnovations.com', telefono: '555-5678', alcance: 'EEUU', recomendacion: 'Gold' },
  { nombre: 'Baires Express', web: 'www.bairesexpress.com', usuario: 'amex', password: 'concierge22', email: 'info@bairesexpress.com', telefono: '987654321', alcance: 'Buenos Aires', recomendacion: 'Gold' },
  { nombre: 'Worldwide Logistics', web: 'www.worldwidelogistics.com', usuario: 'user3', password: 'logistics123', email: 'info@worldwidelogistics.com', telefono: '555-4321', alcance: 'Global', recomendacion: 'Platinum' },
  { nombre: 'American Solutions', web: 'www.americansolutions.com', usuario: 'user4', password: 'securePass123', email: 'info@americansolutions.com', telefono: '555-8765', alcance: 'EEUU', recomendacion: 'Silver' },
  { nombre: 'ArgenSoft', web: 'www.argensoft.com', usuario: 'user5', password: 'argenPass', email: 'info@argensoft.com', telefono: '555-9876', alcance: 'Argentina', recomendacion: 'Bronze' },
  { nombre: 'BairesTech', web: 'www.bairestech.com', usuario: 'user6', password: 'bairesPass', email: 'info@bairestech.com', telefono: '555-6543', alcance: 'Argentina', recomendacion: 'Platinum' },
];



const Transfers = () => {
    return (
        <Table data={data}></Table>
      );
};

export default Transfers;