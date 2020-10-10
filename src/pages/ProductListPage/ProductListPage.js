import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import callApi from '../../utils/apiCaller';
import { actionFetchProductsRequest } from '../../actions';

class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };

  render() {
    const { products } = this.props;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-info mb-10">
          Thêm sản phẩm
        </button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actionFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
