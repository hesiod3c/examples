"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _paginator = require("paginator");

var _paginator2 = _interopRequireDefault(_paginator);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require("react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _interface = require("../../../interface");

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.pagination;

/**
 * Pagination component
 * @extends {PureComponent }
 * @class
 */

var Pagination = function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "buildPages",


    /**
     * buildPages
     */

    /**
     * defaultProps
     * @property {Number} itemsCountPerPage
     * @property {Number} pageRangeDisplayed
     * @property {Number} activePage
     * @property {String} prevPageText
     * @property {String} firstPageText
     * @property {String} nextPageText
     * @property {String} lastPageText
     */
    value: function buildPages() {
      var pages = [];
      var _props = this.props,
          itemsCountPerPage = _props.itemsCountPerPage,
          pageRangeDisplayed = _props.pageRangeDisplayed,
          activePage = _props.activePage,
          prevPageText = _props.prevPageText,
          nextPageText = _props.nextPageText,
          firstPageText = _props.firstPageText,
          lastPageText = _props.lastPageText,
          totalItemsCount = _props.totalItemsCount,
          itemChange = _props.itemChange,
          activeClass = _props.activeClass,
          hideDisabled = _props.hideDisabled;


      var paginationInfo = new _paginator2.default(itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage);

      if (paginationInfo.first_page !== paginationInfo.last_page) {
        for (var i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
          pages.push(_react2.default.createElement(PaginationItem, {
            isActive: i === activePage,
            key: i,
            pageNumber: i,
            pageText: i + "",
            onClick: itemChange,
            activeClass: activeClass
          }));
        }
      }

      hideDisabled && !paginationInfo.has_previous_page || pages.unshift(_react2.default.createElement(PaginationItem, {
        key: "prev" + paginationInfo.previous_page,
        pageNumber: paginationInfo.previous_page,
        onClick: itemChange,
        pageText: prevPageText,
        isDisabled: !paginationInfo.has_previous_page
      }));

      hideDisabled && !paginationInfo.has_previous_page || pages.unshift(_react2.default.createElement(PaginationItem, {
        key: "first",
        pageNumber: 1,
        onClick: itemChange,
        pageText: firstPageText,
        isDisabled: paginationInfo.current_page === paginationInfo.first_page
      }));

      hideDisabled && !paginationInfo.has_next_page || pages.push(_react2.default.createElement(PaginationItem, {
        key: "next" + paginationInfo.next_page,
        pageNumber: paginationInfo.next_page,
        onClick: itemChange,
        pageText: nextPageText,
        isDisabled: !paginationInfo.has_next_page
      }));

      hideDisabled && !paginationInfo.has_next_page || pages.push(_react2.default.createElement(PaginationItem, {
        key: "last",
        pageNumber: paginationInfo.total_pages,
        onClick: itemChange,
        pageText: lastPageText,
        isDisabled: paginationInfo.current_page === paginationInfo.total_pages
      }));

      return pages;
    }

    /**
     * render
     * @return {ReactElement} markup
     */


    /**
     * propTypes
     * @property {Number} totalItemsCount
     * @property {Number} onChange
     * @property {Number} activePage
     * @property {Number} itemsCountPerPage
     * @property {Number} pageRangeDisplayed
     * @property {String} prevPageText
     * @property {String} firstPageText
     * @property {String} nextPageText
     * @property {String} lastPageText
     * @property {String} firstPageText
     * @property {Boolean} hideDisabled
     */

  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;

      var pages = this.buildPages();

      return _react2.default.createElement(
        "ul",
        { className: (0, _classnames2.default)(className, styles.pagination) },
        pages
      );
    }
  }]);

  return Pagination;
}(_react.PureComponent);

/**
 * PaginationItem component
 * @extends {PureComponent }
 * @class
 */


Pagination.defaultProps = {
  itemsCountPerPage: 10,
  pageRangeDisplayed: 5,
  activePage: 1,
  prevPageText: "⟨",
  firstPageText: "«",
  nextPageText: "⟩",
  lastPageText: "»"
};
Pagination.propTypes = {
  totalItemsCount: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  activePage: _propTypes2.default.number,
  itemsCountPerPage: _propTypes2.default.number,
  pageRangeDisplayed: _propTypes2.default.number,
  prevPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  nextPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  lastPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  firstPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  hideDisabled: _propTypes2.default.bool
};

var PaginationItem = function (_PureComponent2) {
  _inherits(PaginationItem, _PureComponent2);

  /**
   * @constructor
   * @param {Object} props
   */
  function PaginationItem(props) {
    _classCallCheck(this, PaginationItem);

    var _this2 = _possibleConstructorReturn(this, (PaginationItem.__proto__ || Object.getPrototypeOf(PaginationItem)).call(this, props));

    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  /**
   * defaultProps
   * @property {Number} total
   */


  /**
   * propTypes
   * @property {Number} total
   */


  _createClass(PaginationItem, [{
    key: "handleClick",


    /**
     * handleClick
     */
    value: function handleClick(event) {
      var _props2 = this.props,
          isDisabled = _props2.isDisabled,
          pageNumber = _props2.pageNumber;

      event.preventDefault();

      if (isDisabled) {
        return;
      }

      this.props.onClick(pageNumber);
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props3 = this.props,
          pageText = _props3.pageText,
          isActive = _props3.isActive,
          isDisabled = _props3.isDisabled;


      var fullClass = (0, _classnames2.default)(styles['pagination-item'], (_classNames = {}, _defineProperty(_classNames, styles.active, isActive), _defineProperty(_classNames, styles.disabled, isDisabled), _classNames));

      return _react2.default.createElement(
        "li",
        { className: fullClass, onClick: this.handleClick.bind(this) },
        _react2.default.createElement(
          "a",
          { className: styles['pagination-link'], href: "#" },
          pageText
        )
      );
    }
  }]);

  return PaginationItem;
}(_react.PureComponent);

PaginationItem.defaultProps = {
  isActive: false,
  isDisabled: false
};
PaginationItem.propTypes = {
  pageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  pageNumber: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  isActive: _propTypes2.default.bool,
  isDisabled: _propTypes2.default.bool
};


Pagination.Item = PaginationItem;

/**
 * @example <Pagination />
 */
exports.default = (0, _reactCssModules2.default)(Pagination, styles);