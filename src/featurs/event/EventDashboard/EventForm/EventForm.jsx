import React, { Component } from "react";
import { Segment, Form, Button, Label, Input } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.createEvent(this.state);
  };

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    const { title, date, hostedBy, city, venue } = this.state;
    const { cancelFormOpen } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.handleInputChange}
              name="title"
              value={title}
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <Label>Event Date</Label>
            <Input
              type="date"
              placeholder="Event Date"
              onChange={this.handleInputChange}
              name="date"
              value={date}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City event is taking place"
              onChange={this.handleInputChange}
              name="city"
              value={city}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder="Enter the Venue of the event"
              onChange={this.handleInputChange}
              name="venue"
              value={venue}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder="Enter the name of person hosting"
              onChange={this.handleInputChange}
              name="hostedBy"
              value={hostedBy}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
