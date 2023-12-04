const {
  Box,
  H1,
  H2,
  Form,
  Input,
  Button,
  Label,
  ContactList,
  ContactItem,
  H3,
} = require('./Phonebook.styled');

function Phonebook() {
  return (
    <Box>
      <H1>Phonebook</H1>
      <Form>
        <Label>Name</Label>
        <Input placeholder="Add contact name"></Input>
        <Label>Number</Label>
        <Input type="tel" placeholder="Add contact number"></Input>
        <Button>Add Contact</Button>
      </Form>
      <H2>Contacts</H2>
      <ContactList>
        <H3>Find contact name by number:</H3>
        <Input placeholder="Find contact name"></Input>
        <ContactItem>1</ContactItem>
        <ContactItem>2</ContactItem>
        <ContactItem>3</ContactItem>
      </ContactList>
    </Box>
  );
}

export default Phonebook;
