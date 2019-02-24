import React, { Component } from 'react';
import Header from '../header/header';

class VillainList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      villain1: ['Madara Uchiha'],
      villain2: ['Cell'],
      villain3: ['Pain'],
      villain4: ['Sosuke Aizen'],
      villain5: ['Hisoka Morow'],
    }
  }

  render () {
    return (
      <div className='villains-container'>
        <div className='villains-container__header'>
          <Header />
        </div>
        <div className='villains-list-container'>
          <div className='villains-list'>
            <div className='villains-list__front'>
              {this.state.villain1}
              <hr className="villains-list__line"></hr>
              <p>Madara Uchiha (うちはマダラ, Uchiha Madara) was the legendary leader of the Uchiha clan. He founded Konohagakure alongside his rival, Hashirama Senju, with the intention of beginning an era of peace. When the two couldn't agree on how to achieve that peace, they fought for control of the village, a conflict which ended in Madara's death. Madara, however, rewrote his death and went into hiding to work on his own plans. Unable to complete it in his natural life, he entrusted his knowledge and plans to Obito Uchiha shortly before his actual death. Years later, Madara would be revived, only to see his plans foiled before his final death.</p>
              <div className='villains-list__back'>
                <a href='https://www.youtube.com/watch?v=c5G1FDbZ2zg'><img className='villains-list__image' src="../assets/images/madara.png"/></a>
              </div>
            </div>
          </div>
          <div className='villains-list'>
            <div className='villains-list__front'>
              {this.state.villain2}
              <hr className="villains-list__line"></hr>
              <p>Cell (セル Seru) is the ultimate creation of Dr. Gero, who came from a future timeline, designed to possess all the abilities of the greatest fighters to have ever inhabited or visited Earth; the result was a "perfect warrior", possessing numerous favorable genetic traits and special abilities. He was one of the few Red Ribbon Androids not directly completed by Dr. Gero; he was completed by Dr. Gero's Supercomputer. He is the main antagonist of the Imperfect Cell, Perfect Cell, and Cell Games Sagas.</p>
              <div className='villains-list__back'>
                <a href='https://www.youtube.com/watch?v=LVc1DBMsZ04'><img className='villains-list__image' src="../assets/images/cell.jpg"/></a>
              </div>
            </div>
          </div>
          <div className='villains-list'>
            <div className='villains-list__front'>
              {this.state.villain3}
              <hr className="villains-list__line"></hr>
              <p>Nagato (長門, Nagato) was a shinobi of Amegakure and descendant of the Uzumaki clan. Forming Akatsuki alongside his friends (and fellow war orphans) Yahiko and Konan, Nagato dreamed of bringing peace to the violent shinobi world. However, following Yahiko's death, Nagato adopted the alias of Pain (ペイン, Pein) and, along with Konan, began leading a new Akatsuki; one that would force the world into peace using any means necessary.</p>
              <div className='villains-list__back'>
                <a href='https://www.youtube.com/watch?v=RCkfJvZNXyQ'><img className='villains-list__image' src="../assets/images/pain.png"/></a>
              </div>
            </div>
          </div>
          <div className='villains-list'>
            <div className='villains-list__front'>
              {this.state.villain4}
              <hr className="villains-list__line"></hr>
              <p>Sōsuke Aizen (藍染 惣右介, Aizen Sōsuke) is the former captain of the 5th Division in the Gotei 13. He later leaves Soul Society with his followers, Gin Ichimaru and Kaname Tōsen. His lieutenant was Momo Hinamori. He formerly served as the lieutenant of the 5th Division under Shinji Hirako. After waging war against Soul Society with an army of Arrancar, Aizen was defeated by Ichigo Kurosaki and sealed away by Kisuke Urahara, and then imprisoned for his crimes.</p>
              <div className='villains-list__back'>
                <a href='https://www.youtube.com/watch?v=5tP8_onP0Js'><img className='villains-list__image' src="../assets/images/aizen.png"/></a>
              </div>
            </div>
          </div>
          <div className='villains-list'>
            <div className='villains-list__front'>
              {this.state.villain5}
              <hr className="villains-list__line"></hr>
              <p>Hisoka Morow (ヒソカ゠モロウ, Hisoka Morou) is a Hunter and former member #4 of the Phantom Troupe; his physical strength ranked third in the group. He is always in search for strong opponents, and would spare those who have great potential, such as Gon and Killua in order for them to get strong enough to actually challenge him. He originally served as the primary antagonist of the Hunter Exam arc and a secondary one of the Heaven's Arena arc, before becoming a supporting character during the Yorknew City arc and Greed Island arc. During the 13th Hunter Chairman Election arc, he briefly reprises his role as a secondary antagonist.</p>
              <div className='villains-list__back'>
                <a href='https://www.youtube.com/watch?v=ly99XLQ1tWY'><img className='villains-list__image' src="../assets/images/hisoka.PNG"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VillainList
