import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bobito Official';

  menuItems = [
    { title: 'За мен', 
      content: 'Аз съм Бобката ама някои ми викат Гопката. Топ 15 съм в CS 1.6 и съм roblox милионер.', 
      isOpen: false,
    },

    { title: 'Хобита и интереси', content: '12 часа от денят ми отиват в тежка гейминг сесия, а другите 4 си варя яйца.', 
      isOpen: false },

    { title: 'Любимият ми content creator', 
      content: 'CDawgVA - The Monke', 
      isOpen: false,
      link: 'https://www.youtube.com/@CDawgVA',
      linkdesc: 'Channel Link',},

    { title: 'Информация за канала ми', 
      content: 'Youtube: BobkataGopkov', 
      isOpen: false,
      nestedList: [
        'В CS 1.6 правя неща, които никой не е виждал до ся.',
        'Всеки петък в 11:00 се пускам на живо и ви показвам как да си спретнете най-тежката попара в целия свят.'
      ] },

    { title: 'Примерно остойностяване', 
      content: 'Ако искате да колабваме или да работим заедно плащам единствено в exposure.', 
      isOpen: false }
  ];

  toggleItem(index: number) {
    this.menuItems.forEach((item, i) => {
      if (i !== index) {
        item.isOpen = false;
      }
    });
    this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
  }
}

