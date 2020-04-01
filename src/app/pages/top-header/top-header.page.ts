import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {Platform} from '@ionic/angular';
import {ShowOptionsPage} from '../show-options/show-options.page';

// @ts-ignore
@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.page.html',
    styleUrls: ['./top-header.page.scss'],
})
export class TopHeaderPage implements OnInit {

    isSearch: boolean;

    constructor(private platform: Platform, private popoverController: PopoverController) {
        this.isSearch = false;
    }

    ngOnInit() {
        this.isSearch = false;
        console.log(this.platform.platforms());
    }

    public async showOptions(ev, option) {
        const popover = await this.popoverController.create({
            component: ShowOptionsPage,
            event: ev,
            translucent: true,
            componentProps: {
                option
            }
        });
        return await popover.present();
    }

    onCancel($event: CustomEvent) {
        this.isSearch = false;
    }

    openSearch() {
        this.isSearch = true;
    }
}
