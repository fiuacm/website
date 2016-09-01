import React from 'react';

class Events extends React.Component {
  render() {
    const events = [
      {
        'date': {
          'day': '1',
          'month': 'sep'
        },
        'title': 'General Body Meeting',
        'subtitle': 'General Body Meeting and Social',
        'time': {
          'hour': '4',
          'period': 'pm'
        }
        'room': 'PG6 106'
        'link': {
          'text': 'RSVP',
          'link': 'http://google.com'
        }
      },
      {
        'date': {
          'day': '1',
          'month': 'sep'
        },
        'title': 'General Body Meeting',
        'subtitle': 'General Body Meeting and Social',
        'time': {
          'hour': '4',
          'period': 'pm'
        }
        'room': 'PG6 106'
        'link': {
          'text': 'RSVP',
          'link': 'http://google.com'
        }
      },
      {
        'date': {
          'day': '1',
          'month': 'sep'
        },
        'title': 'General Body Meeting',
        'subtitle': 'General Body Meeting and Social',
        'time': {
          'hour': '4',
          'period': 'pm'
        }
        'room': 'PG6 106'
        'link': {
          'text': 'RSVP',
          'link': 'http://google.com'
        }
      }
    ];

    const styles = StyleSheet.create({

    });

    return (
      <div>
        <h1>UPCOMING EVENTS</h1>
        <div>
          {events.map(event => {
            return <div className={`${css(styles.event)}`}>
              <div className={`${css(styles.date)}`}>
                <span className={`${css(styles.dateday)}`}>{event.date.day}</span>
                <span className={`${css(styles.datemonth)}`}>{event.date.month}</span>
              </div>
              <div className={`${css(styles.body)}`}>
                <span className={`${css(styles.title)}`}>{event.title}</span>
                <span className={`${css(styles.title)}`}>{event.subtitle}</span>
              </div>
              <div className={`${css(styles.where)}`}>
                <div className={`${css(styles.datetime)}`}>
                  <span
                  {event.title}
                </div>
                <span className={`${css(styles.title)}`}>{event.subtitle}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default Events;
