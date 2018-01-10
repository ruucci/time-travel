import { Component } from '@angular/core';

@Component({
    selector: 'trips-list',
    templateUrl: './trips-list.component.html',
    styleUrls: ['./trips-list.component.css']
  })
  export class TripsListComponent {
    trips = [
      {
        id: 1,
        name: 'Spring 2016',
        date: '03/24/2016',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Las Vegas',
          state: 'Nevada'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 2,
        name: 'Summer 2016',
        date: '06/10/2016',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Los Angeles',
          state: 'California'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 3,
        name: 'Autumn 2016',
        date: '11/20/2016',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'San Francisco',
          state: 'California'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 4,
        name: 'Winter 2016',
        date: '12/15/2016',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Yosemite National Park',
          state: 'California'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 5,
        name: 'Christmas 2016',
        date: '12/24/2016',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Sequoia National Park',
          state: 'California'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 6,
        name: 'New Year 2017',
        date: '01/05/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Death Valley National Park',
          state: 'California'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 7,
        name: 'Spring 2017',
        date: '03/24/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Grand Canyon National Park',
          state: 'Arizona'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 8,
        name: 'Spring 2017',
        date: '03/26/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Arches National Park',
          state: 'Utah'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 9,
        name: 'Spring 2017',
        date: '03/28/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Zion National Park',
          state: 'Utah'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 10,
        name: 'Summer 2017',
        date: '06/24/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Yosemite National Park',
          state: 'California'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 11,
        name: 'Autumn 2017',
        date: '09/01/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Rocky Mountain National Park',
          state: 'Colorado'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 12,
        name: 'Fall 2017',
        date: '11/26/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'Seattle',
          state: 'Washington'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      },
      {
        id: 13,
        name: 'Winter 2017',
        date: '12/12/2017',
        imageUrl: './../shared/images/1.png',
        location: {
          city: 'New York City',
          state: 'New York'
        },
        sessions: [
          {
            id: 1,
            name: "Stratosphere",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            imageUrl:""
          },
          {
            id: 2,
            name: "Lake Mead",
            description:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:""
          },
          {
            id: 3,
            name: "Hoover Dam",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
            imageUrl:""
          },
          {
            id: 4,
            name: "Red Rock",
            description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
            imageUrl:""
          },
          {
            id: 5,
            name: "The Strip",
            description:"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            imageUrl:""
          }
        ]
      }
    ]
  }
  