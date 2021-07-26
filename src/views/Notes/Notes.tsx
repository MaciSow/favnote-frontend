import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';
import { State } from 'reducers';
import { Note } from 'data/cardContent';
import { fetchItems } from 'actions/actions';

type NotesProps = {
  notes: Note[];
  fetchNotes: any;
};

class Notes extends Component<NotesProps> {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <GridTemplate>
        {notes.map(({ title, content, _id: id }) => (
          <Card id={id} title={title} content={content} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

const mapStateToProps = (state: State) => {
  const { notes } = state;
  return { notes };
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
