import React, { Component } from 'react';
import Header from '../header/header';

class HeroList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero1: ['Goku'],
      hero2: ['Naruto Uzumaki'],
      hero3: ['Ichigo Kurosaki'],
      hero4: ['Levi Ackerman'],
      hero5: ['Sasuke Uchiha']
    }
  }



  render() {
    return (
      <div className='heroes-container'>
        <div className='heroes-container__header'>
          <Header />
        </div>
        <div className='heroes-list-container'>
          <div className='heroes-list'>
            <div className='heroes-list__front'>
              {this.state.hero1}
              <hr className="heroes-list__line"></hr>
              <p>Goku (孫そん悟ご空くう Son Gokū), born Kakarot (カカロット Kakarotto, lit. "Cacarrot"), is a male Saiyan and the main protagonist of the Dragon Ball series. Goku is a Saiyan originally sent to Earth as an infant. However, an accident alters his memory, allowing him to grow up to become Earth's greatest defender and the informal leader of the Dragon Team. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.</p>
              <div className='heroes-list__back'>
                <a href='https://www.youtube.com/watch?v=lJzCsj3aP3k'><img className='heroes-list__image' src="../assets/images/goku.png"/></a>
              </div>
            </div>

            {/* <div className='heroes-list__back'>
                <div className='text'>
                <a href='https://www.youtube.com/watch?v=lJzCsj3aP3k'><img src="../assets/images/kakashi.PNG"/></a>
                </div>
            </div> */}

          </div>
          <div className='heroes-list'>
            <div className='heroes-list__front'>
              <a className='heroes-list__link' href='https://www.youtube.com/watch?v=2sJYOlINqfs'>{this.state.hero2}</a>
              <hr className="heroes-list__line"></hr>
              <p>Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, Literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, Literally meaning: Seventh Fire Shadow).</p>
              
              <div className='heroes-list__back'>
                <a href='https://www.youtube.com/watch?v=lJzCsj3aP3k'><img className='heroes-list__image' src="../assets/images/naruto.png"/></a>
              </div>

            </div>
          </div>
          <div className='heroes-list'>
            <div className='heroes-list__front'>
              <a className='heroes-list__link' href='https://www.youtube.com/watch?v=se1zBJpz0U8'>{this.state.hero3}</a>
              <hr className="heroes-list__line"></hr>
              <p>Ichigo Kurosaki (Japanese: 黒崎 一護 Hepburn: Kurosaki Ichigo) is a fictional character in the Bleach manga series and its adaptations created by Tite Kubo. He is the main protagonist of the series, who receives Soul Reaper powers after befriending Rukia Kuchiki, the Soul Reaper assigned to patrol around the fictional city of Karakura Town.</p>
              
              <div className='heroes-list__back'>
                <a href='https://www.youtube.com/watch?v=lJzCsj3aP3k'><img className='heroes-list__image' src="../assets/images/ichigo.PNG"/></a>
              </div>
                
            </div>
          </div>
          <div className='heroes-list'>
            <div className='heroes-list__front'>
              <a className='heroes-list__link' href='https://www.youtube.com/watch?v=OjWfW7uSEm0'>{this.state.hero4}</a>
              <hr className="heroes-list__line"></hr>
              <p>Levi Ackerman (リヴァイ・アッカーマン Rivai Akkāman?), often formally referred to as Captain Levi (リヴァイ兵長 Rivai Heichō?), is the squad captain (兵士長 Heishichō?, lit. "leader of the soldiers") of the Special Operations Squad within the Survey Corps, and is widely known as humanity's strongest soldier.</p>
              
              <div className='heroes-list__back'>
                <a href='https://www.youtube.com/watch?v=lJzCsj3aP3k'><img className='heroes-list__image' src="../assets/images/levi.png"/></a>
              </div>

            </div>
          </div>
          <div className='heroes-list'>
            <div className='heroes-list__front'>
              <a className='heroes-list__link' href='https://www.youtube.com/watch?v=ycwh2LaeLtA'>{this.state.hero5}</a>
              <hr className="heroes-list__line"></hr>
              <p>Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills. Dissatisfied with his progress, he defects from Konoha so that he can acquire the strength needed to exact his revenge. His years of seeking vengeance and his actions that followed become increasingly demanding, irrational and isolates him from others, leading him to be branded as an international criminal. After learning the truth of his brother's sacrifice and later proving instrumental in ending the Fourth Shinobi World War and being happily redeemed by Naruto, Sasuke decides to return to Konoha and dedicates his life to help protect the village and its inhabitants becoming referred to as the "Supporting Kage" (支う影, Sasaukage).</p>
              
              <div className='heroes-list__back'>
                <a href='https://www.youtube.com/watch?v=lJzCsj3aP3k'><img className='heroes-list__image' src="../assets/images/sasuke.png"/></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroList;