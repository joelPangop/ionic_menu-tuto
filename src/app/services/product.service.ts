import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article, Availability} from '../models/article-interface';
import {environment} from '../models/environements';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    article: Article;

    constructor(private http: HttpClient) {
        this.article = {} as Article;
        this.article.availability = {} as Availability;
    }

    loadArticles(): Observable<Article[]> {
        const url = `${environment.api_url}/article`;
        return this.http.get<Article[]>(url);
    }

    // @ts-ignore
    loadArticle(id): Observable<Article> {
        const url = `${environment.api_url}/article/` + id;
        return this.http.get<Article>(url);
        // const xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = async () => {
        //     if (xhr.readyState === XMLHttpRequest.DONE) {
        //         // alert(xhr.responseText);
        //         console.log(JSON.parse(xhr.response));
        //         this.article = JSON.parse(xhr.response);
        //         return JSON.parse(xhr.response);
        //     }
        // };
        // xhr.open('GET', url, true);
        // xhr.send(null);
    }

    loadArticlesByCategory(catTitle) {
        const url = `${environment.api_url}/article/category/` + catTitle;
        return this.http.get<Article[]>(url);
    }

    loadArticleByUser(userId): Observable<Article[]> {
        const url = `${environment.api_url}/article/user/5e5bf514f37e2f3dd09cfee9`;
        return this.http.get<Article[]>(url);
    }

    createArticle(article: Article, utilisateurId) {
        // return this.http.post(`${environment.url}/article`, article);
        // tslint:disable-next-line:max-line-length
        return this.http.post(`${environment.api_url}/article/utilisateurId/5e5bf514f37e2f3dd09cfee9`, article, {headers: {'content-Type': 'application/json'}});
    }

    leaveNote(utilisateurId, articleId, averageStar) {
        const url = `${environment.api_url}/article/utilisateurId/5e5bf514f37e2f3dd09cfee9/articleId/${articleId}`;
        return this.http.put(url, averageStar);
    }

    updateArticle() {
        // tslint:disable-next-line:max-line-length
        return this.http.put(`${environment.api_url}/article/` + this.article._id, this.article, {headers: {'content-Type': 'application/json'}});
    }

    deleteArticle(id: string) {
        return this.http.delete(`${environment.api_url}/article/` + id);
    }
}
