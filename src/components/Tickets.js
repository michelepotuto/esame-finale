import TicketsItem from "./TicketsItem";

const Tickets = (props) => {
  return (
    <>
      {props.tickets.map((ticketsItem) => (
        <TicketsItem
          key={ticketsItem.BigliettoID}
          biglietto={ticketsItem.BigliettoID}
          band={ticketsItem.Gruppo}
          city={ticketsItem.Citta}
          placeName={ticketsItem.Luogo}
          dataConcert={ticketsItem.Replica}
          price={ticketsItem.Prezzo}
          codeRep={ticketsItem.CodiceReplica}
          quantity={ticketsItem.Quantita}
          seller={ticketsItem.Venditore}
          cartQuantity={ticketsItem.cartQuantity}
        />
      ))}
    </>
  );
};

export default Tickets;
