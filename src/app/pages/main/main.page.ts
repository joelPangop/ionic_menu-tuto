import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Article} from '../../models/article-interface';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    slideOpts = {
        speed: 1000,
        autoplay: {
            delay: 500
        }
    };

    constructor(private productService: ProductService) {
    }

    // @ts-ignore
    articles: Article[];

    ngOnInit() {
        this.loadArticles();
    }

    loadArticles() {
        this.productService.loadArticles().subscribe(res => {
            this.articles = res;
        });
    }

    onCancel($event: CustomEvent) {

    }

    onSearch($event: CustomEvent) {
    }

    showOptions($event: MouseEvent, language: string) {
    }

    doRefresh($event: CustomEvent) {

    }
}
