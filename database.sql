create table Clienti (
	ClienteID int auto_increment,
	Cognome varchar(255),
	Nome varchar(255),
	Codice varchar(255),
	primary key(ClienteID) );

create table Venditore (
	VenditoreID int auto_increment,
	NomeAzienda varchar(255),
	Codice varchar(255),
	primary key (VenditoreID) );

create table Replica (
	ReplicaID varchar(9),
	DataReplica DATE,
	primary key (ReplicaID) );

create table Biglietto(
	BigliettoID int auto_increment,
	VenditoreID int,
	Citta varchar(25),
	Luogo varchar(50),
	Gruppo varchar(100),
	Prezzo int,
	Quantita int,
	Replica DATE,
    CodiceReplica varchar(9),
    cartQuantity int,
    Pagamento SET("bancomat", "carta di credito", "mav", "paypal", "rate"),
	primary key (BigliettoID),
	foreign key (VenditoreID) references Venditore(VenditoreID) );
    
    create table Prenotazione (
	PrenotazioneID int auto_increment,
	ClienteID int,
	BigliettoID int,
    Quantita int,
	primary key (PrenotazioneID), 
    foreign key (ClienteID) references Clienti(ClienteID),
    foreign key (BigliettoID) references Biglietto(BigliettoID));


insert into Clienti (ClienteID, Cognome, Nome, Codice) values ("1", "Puzzu", "Marco", "pass1");
insert into Clienti (ClienteID, Cognome, Nome, Codice) values ("2", "Rinaldi", "Luca", "pass2");

insert into Venditore (VenditoreID, NomeAzienda, Codice) values ("1", "TicketOne", "Pass3");
insert into Venditore (VenditoreID, NomeAzienda, Codice) values ("2", "MondoTicket", "Pass4");

insert into Replica (ReplicaID, DataReplica) values ("Replica01", "2022-07-02");
insert into Replica (ReplicaID, DataReplica) values ("Replica02", "2022-09-01");
insert into Replica (ReplicaID, DataReplica) values ("Replica03", "2022-08-01");
insert into Replica (ReplicaID, DataReplica) values ("Replica04", "2022-07-20");
insert into Replica (ReplicaID, DataReplica) values ("Replica05", "2022-09-23");
insert into Replica (ReplicaID, DataReplica) values ("Replica06", "2022-08-01");

insert into Biglietto (BigliettoID, VenditoreID, Citta, Luogo, Gruppo, Prezzo, Quantita, Replica, CodiceReplica, Pagamento, cartQuantity) values (1, 1, "Torino", "Porta Palazzo", "Grupodies4", 20, 10, "2022-07-01", "replica01", "paypal", 1);
insert into Biglietto (BigliettoID, VenditoreID, Citta, Luogo, Gruppo, Prezzo, Quantita, Replica, CodiceReplica, Pagamento, cartQuantity) values (2, 1, "Milano", "Duomo", "Ernia", 20, 100, "2022-09-01", "replica02", "bancomat", 1);
insert into Biglietto (BigliettoID, VenditoreID, Citta, Luogo, Gruppo, Prezzo, Quantita, Replica, CodiceReplica, Pagamento, cartQuantity) values (3, 1, "Roma", "Centro", "Rondo", 50, 100, "2022-08-01", "replica03", "paypal", 1);
insert into Biglietto (BigliettoID, VenditoreID, Citta, Luogo, Gruppo, Prezzo, Quantita, Replica, CodiceReplica, Pagamento, cartQuantity) values (4, 1, "Pisa", "Torre", "Ed Sheeran", 60, 1000, "2022-07-20", "replica04", "bancomat", 1);
insert into Biglietto (BigliettoID, VenditoreID, Citta, Luogo, Gruppo, Prezzo, Quantita, Replica, CodiceReplica, Pagamento, cartQuantity) values (5, 1, "Trieste", "Chiesa", "Paky", 90, 5, "2022-09-23", "replica05", "paypal", 1);
insert into Biglietto (BigliettoID, VenditoreID, Citta, Luogo, Gruppo, Prezzo, Quantita, Replica, CodiceReplica, Pagamento, cartQuantity) values (6, 1, "Napoli", "Duomo", "Shiva", 30, 1000, "2022-08-01", "replica06", "carta di credito", 1);

insert into Prenotazione (PrenotazioneID, ClienteID, BigliettoID, Quantita) values (1, 1, 1, 2);
insert into Prenotazione (PrenotazioneID, ClienteID, BigliettoID, Quantita) values (2, 2, 6, 2);
insert into Prenotazione (PrenotazioneID, ClienteID, BigliettoID, Quantita) values (3, 2, 2, 3);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Marvel5590P-';
flush privileges;