import React from "react";
import "./styles.css";
import { useState } from "react";
const PlacesLists = {
  Gujarat: [
    {
      name: "Ahmedabad",
      description:
        "A rapidly growing metropolis, an industrial hub, an educational hotspot, and a city with a magnificent past – Ahmedabad is one of the most important cities in Gujarat. Located on the banks of the Sabarmati River, Ahmedabad is the former capital of Gujarat, and its delicious food, colourful culture is making it a fast-growing tourist destination",
      picture: "https://www.holidify.com/images/compressed/2480.jpg?v=1.1",
      rating: "4.7/5"
    },
    {
      name: "Somnath",
      description:
        "Somnath, literally meaning 'lord of the moon' is a pilgrim center and is home to one of the 12 Jyotirlingas. It is a town which derives much of its identity from the mythology, religion, and legends that surround it.",
      picture: "https://www.holidify.com/images/bgImages/SOMNATH.jpg",

      rating: "4.2/5"
    },
    {
      name: "Kutch",
      description:
        "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature from the past. Kutch is probably one of the most beautiful, yet surreal places in India with the vast expanses of the white salt desert. ",
      picture: "https://www.holidify.com/images/bgImages/KUTCH.jpg",

      rating: "4.0/5"
    },
    {
      name: "Statue of Unity",
      description:
        "Statue of Unity is a memorial to The Iron Man of India, Sardar Vallabhbhai Patel. The statue has been erected to propagate Sardar Vallabhbhai Patel's vision of India and to inspire the Citizens of India through his patriotism and freedom struggle.The Bronze statue of the founding father of the Republic of India stands 182 metres tall grabbing the attention of the whole world as the 'Tallest statue in the World'.",
      picture:
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1317845540_20191031110021_20191031110103.png",

      rating: "3.9/5"
    },
    {
      name: "Gir National Park",
      description:
        "Gir National Park and Wildlife Sanctuary is the only remaining home for the Asiatic Lions. Located in Talala Gir in Gujarat, the Sanctuary is a part of Kathiawar- Gir dry deciduous forests ecoregion. Gir National Park is closed from 16 June to 15 October every year and the best time for wildlife spotting is April and May",
      picture: "https://www.holidify.com/images/compressed/3487.jpg?v=1.1",

      rating: "3.7/5"
    }
  ],
  Bihar: [
    {
      name: "Gaya",
      description:
        "Amongst the most famous places in Bihar is Gaya, which is a Hindu pilgrimage hub and a transit point for Buddhist pilgrimage centre of Bodhgaya. It is believed that it was here under the tree that Buddha attained enlightenment. Gaya is a busy city situated on the bank of River Phalgu and it is replete with many temples and historic sites dating back to different eras that stand as the evidence to the successful rule of Maurya and Gupta dynasty here. ",
      picture:
        "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/gaya-bihar.jpg",
      rating: "4.7/5"
    },
    {
      name: "Nalanda",
      description:
        "Probably the oldest university in India, Nalanda is an important site to visit in Bihar. A perfect reminisce to the time of flourishing Gupta and Pala period, Nalanda is an acclaimed tourist attraction in Bihar. It is believed that the last and most famous Jain Tirthankara, Mahavira spent 14 monsoon seasons here. Even, Buddha is said to have delivered lectures near the mango grove in Nalanda. The fame of this education centre was to an extent that Hieun Tsang, the famous Chinese traveller visited here.",
      picture:
        "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/nalanda-bihar.jpg",
      rating: "4.5/5"
    },
    {
      name: "Munger",
      description:
        "Dubbed as the seat of Bihar School of Yoga, Munger is yet another place that is popular amongst the tourists in Bihar. The history of Munger dates back to Aryans, who called Munger the ‘Midland’ for their settlement. For yoga buffs, Munger is not an unknown name, thus we can expect a large foreign crowd thronging this place. The present day Munger is a twin city, which comprises of Munger and Jamalpur. Reckoned to be one of the oldest cities of Bihar, Munger was once the capital of Mir Kasim before it fell into the hands of British.",
      picture:
        "https://www.indiamike.com/files/images/44/41/11/temple-at-munger.jpg",
      rating: "4.1/5"
    },
    {
      name: "Vaishali",
      description:
        "Vaishali is an important archaeological site that was once the capital city of Licchavi rulers. Vaishali earned fame as a birthplace of last Jain Tirthankar Lord Mahavira. It is believed that Mahavira was born and brought up in 6th century BCE in Kundalagram of Republic of Vaishali. Another major event this place was a witness to was the last sermon of Buddha in 483 BCE. Vaishali was a prosperous kingdom during the time of Buddha, it is also known for its beautiful courtesan Amrapali. So, you see, one has enough to recall in Vaishali and adding to its historic charm is the well-preserved Ashokan Pillar.",
      picture:
        "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/vaishali-ashoka-lion-pillar-stuba.jpg",
      rating: "3.6/5"
    },
    {
      name: "Patna",
      description:
        "Situated on the southern bank of Ganga, Patna is the largest city of Bihar. Better known as Patliputra in ancient India, the city is also believed to be the one of the oldest continuously inhabited cities in the world. Patna is a pilgrimage for Sikh devotees as it is reckoned to be the birthplace of last Sikh Guru, Guru Gobind Singh. The city flourished in the period of Haryanka, Nanda, Mauryan, Shunga, Gupta and Pala earned fame all across India.",
      picture:
        "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/patna-buddha-smriti-park.jpg",
      rating: "3.2/5"
    }
  ],
  Kerala: [
    {
      name: "Alleppey",
      description:
        "There is the whole of Kerala in one side, and then there is this heavenly tourist destination called Alappuzha or Alleppey! Esteemed as the ‘Backwater Capital of India’ or the ‘Venice of the East’, Alleppey is known for its silent backwaters and bountiful beauty!        Seated on the banks of the azure Vembanad Lake, it is in fact one of the most popular backwater destinations in Kerala and one of the highest sought-aftertourist places in Kerala.",
      picture:
        "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Alleppey.jpg",
      rating: "4.9/5"
    },
    {
      name: "Wayanad",
      description:
        "Cradled in the lap of the Western Ghats, Wayanad truly deserves a top rank in the list of places to visit in Kerala. Situated at an astounding height of 700-2,100m, this stunning hill station is all about fantasy, untouched nature, unforgettable moments, and merriment! Adding more to Wayanad’s enchanting beauty, visitors can also revisit and unfold history while visiting this hilly retreat. Yes, the lush and pristine forests in Wayanad are said to be inhabited more than 3,000 years ago",
      picture:
        "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Wayanad.jpg",
      rating: "4.5/5"
    },
    {
      name: "Cochin",
      description:
        "Kochi or Cochin is a unique placein God’s Own Country that is perfectly blended with cultural values and modern ideas! Fondly called the ‘Queen of the Arabian Sea’, this imposing port-city has always been an attraction point since the beginning of history.        A melting point of numerous culture and traditions, Cochin has embraced all the modern outlook to become one of the most developed metropolis in India.",
      picture:
        "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Cochin.jpg",
      rating: "4.1/5"
    },
    {
      name: "Munnar",
      description:
        "Yet another gorgeous hill station in the lap of the fascinating Western Ghats, Munnar needs no introduction. Rising 1,600m above the sea level, a vacation in the beguiling locales of this hilly retreat is all about the lofty clouds, picturesque mountains, rolling hills, and a soothing ambience. Canopied mostly by never-ending tea plantations and lush forests, you simply cannot miss out Munnar while searching for the best tourist destination in Kerala.",
      picture:
        "https://www.ekeralatourism.net/wp-content/uploads/2015/12/munnar-1.png",
      rating: "3.5/5"
    },
    {
      name: "Vagamon",
      description:
        "If you are looking for an offbeat, yet captivating holiday experience in Kerala, you must plan your vacation in Vagamon. One of the most scenic hill stations and least explored tourist places in Kerala, this retreat in the Idukki district is known for its salubrious beauty, pleasant climate, and much more.In addition to leisure travellers, thrill and adventure seekers also make it to Vagamon in a considerable number. ",
      picture:
        "https://www.ekeralatourism.net/wp-content/uploads/2017/12/Vagamon.jpg",
      rating: "3.1/5"
    }
  ],
  Assam: [
    {
      name: "Kaziranga National Park",
      description:
        "The Kaziranga National Park is home to two-thirds of the planet’s population of the one-horned rhinoceros. Apart from that, this national park is also a World Heritage Site and a major highlight on the Assam tourist places map. It’s vibrant, well preserved, sustained ecology, and versatile biodiversity is what contributes to keeping this place on the top of the list of tourist places in Assam. ",
      picture:
        "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/KazirangaNationalPark_PTI.jpg",
      rating: "4.6/5"
    },
    {
      name: "Manas National Park: Biosphere Reserve",
      description:
        "The next on the list of Assam places to visit is the Manas National Park, which is a UNESCO Natural World Heritage site, a Project Tiger Reserve, an Elephant Reserve, a Biosphere Reserve all in one, and the best tourist place in Assam! Being famous for the rare golden langur and the adorable red panda, Manas is one of the best national parks in Assam and even all of India for those who wish to witness the rare species of India’s flora.",
      picture:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2019/02/Manas-National-Park_18th-oct-400x229.jpg",
      rating: "4.2/5"
    },
    {
      name: "Kamakhya Temple",
      description:
        "One of the 51 Shakti Peeths in India, the Kamakhya Temple carries a myth to protect devotees from evil eyes. It’s one of the most popular and famous tourist places in Assam for pilgrims and tourists alike owing to its amazing Tantric adoration. Located atop Nilachal Hills, this temple’s main deity is Lord Shiva and Daksha Yagna",
      picture:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/Kamakhya-Temple-400x266.jpg",
      rating: "4.9/5"
    },
    {
      name: "Majuli Island",
      description:
        "Majuli’s eye-warming naturescapes make it one of the top tourist places in Assam. It is the world’s largest riverine island as well as one of the most important Satras established by Sankardeva and Madhavdev. The Majuli islands are spread over an area of around 452 sq km and most of these get submerged underwater during the monsoons, leaving the bigger islands like Kamalabari, Auniati, and Garamur on the surface.",
      picture:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/Majuli-400x267.jpg",
      rating: "3.9/5"
    },
    {
      name: "Guwahati Planetarium",
      description:
        "Astronomy lovers who visit Assam absolutely love this one attraction. The Guwahati Planetarium attracts a large number of visitors every year with its myriad avenues for space exploration and activities for kids and space enthusiasts. It’s a great place for young minds that want to learn surprising facts about the universe in a fun and interactive way.",
      picture:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/Astronomical-Observatory.jpeg",
      rating: "3.7/5"
    }
  ],
  Ladakh: [
    {
      name: "Pangong Lake",
      description:
        "The most popular tourist attraction in Ladakh, Pangong lake is an endorheic (landlocked) lake situated at 4350 meters. Also known as Pangong Tso it is 12 kilometres long and extends from India to Tibet. Almost 60% of Pangong Lake lies in the Tibetan Autonomous Region. A unique feature of the lake is that it does not remain blue throughout the year or even the day, rather it changes colours from azure to light blue to green and grey too!",
      picture:
        "https://www.holidify.com/images/cmsuploads/compressed/2999_20190305160539.jpg",
      rating: "5/5"
    },
    {
      name: "Nubra Valley",
      description:
        "Nubra Valley lies in the union territory of Jammu & Kashmir, at a distance of around 140 Km from Leh. With arid mountains in the backdrop, it is famous for the Bactrian camel rides, orchards and monasteries. Surrounded by snow-dusted Himalayan mountains, it can be reached via Khardung La.",
      picture: "https://www.holidify.com/images/bgImages/NUBRA-VALLEY.jpg",
      rating: "4.9/5"
    },
    {
      name: "Sangam",
      description:
        "Sangam is the confluence of Indus and Zanskar Rivers in Ladakh. It is located 35km from Leh in Nimmu, on the Leh Srinagar highway. The two rivers can be separately seen meeting at this point. While the Indus River appears as shiny blue, Zanskar River appears muddy green. It is a spectacular site to witness.The flow of the two rivers at Sangam changes according to the season. While Zanskar River is swollen and rapis in summers, Indus River is calmer.",
      picture:
        "https://www.holidify.com/images/cmsuploads/compressed/13-10-08217CONFLUENCEOFINDUSRIVERN_20210615144506.jpeg",
      rating: "4.2/5"
    },
    {
      name: "Thiksey Monastery",
      description:
        "Renowned for its resemblance with the Potala Palace in Tibet, Thiksey Monastery is among the most revered sites in Ladakh among Buddhists. The monastic complex was built in the 15th century by Palden Zangpo. It is the largest gompa in central Ladakh and the major attraction of Thiksey Monastery is Maitreya Temple, which was built in 1970 to commemorate the visit of the Dalai Lama in the 14th century.",
      picture:
        "https://ihplb.b-cdn.net/wp-content/uploads/2022/03/Thikse_Monastery_.jpg",
      rating: "4.1/5"
    },
    {
      name: "Hall of Fame Museum",
      description:
        "Constructed by the Indian Army to commemorate the brave Indian martyr soldiers, the Hall of Fame Museum is located in Leh. It stands as a reminder of the great sacrifice of the brave soldiers who laid down their lives to save their country. There are two stories in the museum, which are divided into several sections.    On the Upper Floor, there is a gallery named OP Vijay Gallery that comprises the arms and ammunition captured and used during Kargil War. ",
      picture:
        "https://ihplb.b-cdn.net/wp-content/uploads/2022/03/Hall-of-Fame-Museum.jpg",
      rating: "4.0/5"
    }
  ]
};
var hideInfo = true;
export default function App() {
  const [SelectedPlace, SetPlace] = useState("Assam");
  function clickSelectCategory(state) {
    SetPlace(state);
    hideInfo = false;
  }

  const PlaceDatabaseArray = Object.keys(PlacesLists);

  return (
    <div className="App">
      <h1> I Recommend GoodPlaces </h1>
      <br />
      <br />
      <div>
        {PlaceDatabaseArray.map(function (category, index) {
          return (
            <button
              key={index}
              onClick={function () {
                clickSelectCategory(category);
              }}
              style={{
                cursor: "pointer",
                fontSize: "25px",
                fontWeight: "600",
                background: "#f0c869",
                borderRadius: "0.5rem",
                padding: "2rem  1rem",
                border: "10px solid black",
                borderTopColor: "#1f85de",
                borderBottomColor: "#1f85de",
                margin: "1rem 0.3rem"
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        className="content"
        style={{ visibility: hideInfo ? "hidden" : "visible" }}
      >
        <ul>
          {PlacesLists[SelectedPlace].map((Place) => (
            <li key={Place.name}>
              {" "}
              <div className="left">
                <div
                  style={{
                    fontSize: "25px",
                    color: "Black",
                    fontWeight: "800"
                  }}
                >
                  {" "}
                  {Place.name}{" "}
                </div>
                <hr />
                <div> {Place.description} </div>

                <div id="rating">Rating : {Place.rating} </div>
              </div>
              <div className="right">
                <img src={Place.picture} alt="Beautiful view of the Area"></img>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
<footer>
<a href='https://ajaisportfolio.netlify.app/contactme.html/'>
        <button className="contact" style={{padding:"10px", background:"black",color:"white", fontSize:"20px"}}>
            Contact Me
        </button>
    </a>
</footer>

    </div>
  );
}
