import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article-interface';
import {ActivatedRoute} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

    catTitle: string;
    articles: Article[];

    constructor(private activatedRoute: ActivatedRoute, private toastCtrl: ToastController, private http: HttpClient,
                private navCtrl: NavController, private productService: ProductService) {
    }

    ngOnInit() {
        this.catTitle = this.activatedRoute.snapshot.paramMap.get('catTitle');
        this.loadArticles();
    }

    doRefresh($event) {
        this.productService.loadArticlesByCategory(this.catTitle).subscribe((articles: Article[]) => {
            this.articles = articles;
            console.log('Articles a partir du panier', articles);
            $event.target.complete();
        });
    }

    private loadArticles() {
        this.productService.loadArticlesByCategory(this.catTitle).subscribe(data => {
            this.articles = data;
        });
    }
}
