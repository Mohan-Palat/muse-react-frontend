
import React from 'react';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const EditSongModal = (props) => {
  console.log(props);
  return (
    <Modal open={props.open}>
      <Header>Edit Song</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>Name:</Label>
          <Form.Input
            type="text"
            name="name"
            value={props.songToEdit.name}
            onChange={props.handleEditChange}
          />
          <Label>Breed:</Label>
          <Form.Input
            type="text"
            name="breed"
            value={props.songToEdit.breed}
            onChange={props.handleEditChange}
          />
          <Label>Owner:</Label>
          <Form.Input
            type="text"
            name="owner"
            value={props.songToEdit.owner}
            onChange={props.handleEditChange}
          />
          <Modal.Actions>
            <Button color="green" type="submit">
              Edit Song
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EditSongModal;



