import React from "react"
import { withRouter,Link,routerRedux } from "dva/router"
import * as api from "../services/example"
import {productUpdatelist,productUpdatelistAsync,productUpdatelistHttp} from "../actions"

class Product extends React.Component{


    componentDidMount(){
        // api.getProduct()
        // .then(res => {
        //     console.log(res.data);
        // })
        api.posts()
        .then(res => {
            console.log(res.data)
        })
    }

    clickProductList = (event) => {

        const currentProduct = {
            name:"玉米1"
        }

        // this.props.dispatch({
        //     type:"product/updateList",
        //     payload:currentProduct
        // })
        this.props.dispatch(productUpdatelist(currentProduct));
    }

    clickProductListAsync = (event) => {
        const currentProduct = {
            name:"玉米2"
        }

        this.props.dispatch({
            type:"product/updateListAsync",
            payload:currentProduct
        })
    }

    clickProductListHttp = (event) => {
        this.props.dispatch({
            type:"product/updateListHttp",
            payload:{
                id:1001
            }
        })   
    }

    clickGoToHandler = (event) =>{
        // console.log(this.props.history);
        this.props.history.push("/");
    }

    clickGoToReduxHandler = (event) =>{
        this.props.dispatch(routerRedux.push("/"));
    }

    render(){
        const { productList } = this.props.productList;
        
        return(
            <div>
                product商品：{ this.props.title }
                <ul>
                    {
                        productList.map((element,index) => {
                            return <li key={index}>{ element.name }</li>
                        })
                    }
                </ul>

                <button onClick={ this.clickProductList }>获取商品列表</button>
                <button onClick={ this.clickProductListAsync }>获取商品列表Async</button>
                <button onClick={ this.clickProductListHttp }>获取商品列表Http</button>
                <Link to="/">去首页</Link>
                <button onClick={ this.clickGoToHandler }>去首页</button>
                <button onClick={ this.clickGoToReduxHandler }>Redux去首页</button>
            </div>
        )
    }
}

export default withRouter(Product)