import React, { Component } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ActivityPreview_preview_container__3tai0 {\n  font-family: 'open_sansregular', sans-serif;\n  margin-left: 30px;\n  margin-right: 50px;\n}\n\n.ActivityPreview_preview_title__1GDjY {\n  margin-left: 10px;\n  background-color: #FFFFFF;\n  color: #000000;\n  font-size: 1.5em;\n  font-weight: bold;\n  padding: 5px;\n  height: auto;\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__3i4Vs {\n  display: inline-block;\n}\n\n.ActivityPreview_preview_icons__3i4Vs img {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__3i4Vs object {\n  height: 20px;\n  width: 20px;\n}\n\n.ActivityPreview_preview_icons__3i4Vs ul {\n  margin-left: 30px;\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_icons__3i4Vs ul li {\n  list-style-type: none;\n  margin-left: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_status_container__2Thby {\n  margin-left: 10px;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #f5faff;\n}\n\n.ActivityPreview_inline_flex__1pvo5 {\n  display: inline-flex;\n}\n\n.ActivityPreview_preview_status_title__27GZY {\n  margin-left: 10px;\n  margin-right: 5px;\n}\n\n.ActivityPreview_preview_status_detail__D9NiA {\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-right: 20px;\n}\n\n.ActivityPreview_status_title_class__1Bw1H {\n\n}\n\n.ActivityPreview_status_group_class__213C2 {\n\n}\n\n.ActivityPreview_preview_categories__1YrSS {\n  margin-top: 20px;\n  margin-left: 15px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul {\n  columns: 5;\n  column-rule: 1px solid #ebebeb;\n  line-height: 150%;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li {\n  list-style-type: none;\n  font-size: 0.9em;\n  font-weight: bold;\n  color: #778293;\n  margin-left: 20px;\n  padding-left: 4px;\n  cursor: pointer;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li:hover {\n  color: #1d2531;\n  background-color: #f8f8f8;\n  position: relative;\n}\n\n.ActivityPreview_preview_categories__1YrSS ul li:hover:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_category_selected__2gHPF {\n  color: #1d2531;\n  /* background-color: #f8f8f8; */\n  position: relative;\n}\n\n.ActivityPreview_preview_category_selected__2gHPF:after {\n  /* content: url('../../../assets/images/arrow.svg'); */\n  height: 14px;\n  width: 14px;\n  display: block;\n  position: absolute;\n  left: -13px;\n  top: 2px;\n}\n\n.ActivityPreview_preview_content__3ndG2 {\n  vertical-align: top;\n}\n\n.ActivityPreview_preview_summary__2M11Q {\n  width: 300px;\n}\n\n.ActivityPreview_summary_container__3c2Lt {\n  margin-top: 30px;\n  padding-right: 20px;\n}\n\n.ActivityPreview_summary_section_title__2yAmt {\n  background-color: #3a84b3;\n  color: #FFFFFF;\n  font-size: 1.3em;\n  margin-bottom: 15px;\n  margin-top: 30px;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  display: block;\n}\n\n.ActivityPreview_summary_section_group__1prJe {\n  background-color: #f5faff;\n  margin-top: 15px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_summary_field_name__2ii3f {\n  padding-left: 15px;\n}\n\n.ActivityPreview_summary_field_value__16N-w {\n  padding-left: 15px;\n  font-family: 'open_sansextrabold', sans-serif;\n  margin-bottom: 15px;\n}\n\n.ActivityPreview_main_group_container__4QVQf {\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_title_class__1t12o {\n  font-size: 1.3em;\n  font-weight: bold;\n  margin-bottom: 15px;\n  margin-top: 30px;\n}\n\n.ActivityPreview_section_group_class__3WIHL {\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.ActivityPreview_section_subtitle_class__1RBXN {\n  font-size: 1.1em;\n  font-weight: bold;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  width: 100%;\n}\n\n.ActivityPreview_section_field_name__2mQY7 {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.ActivityPreview_section_field_value__3h0kd {\n  font-weight: bold;\n  border-bottom: 1px solid #ebebeb;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_container__Xe8ey {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__1zo_q {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.ActivityPreview_box_table__1zo_q td {\n  width: 33%;\n  padding-left: 20px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_table__1zo_q tr td:nth-child(2) {\n  border: 1px solid #ebebeb;\n}\n\n.ActivityPreview_two_box_table__2w-_w {\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  width: 100%;\n}\n\n.ActivityPreview_two_box_table__2w-_w td {\n  width: 50%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_two_box_table__2w-_w tr td:first-child {\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_box_field_name__1rDaU {\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n.ActivityPreview_box_field_value__1j3If {\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_box_field_value_tight__1D_p0 {\n  font-weight: bold;\n}\n\n.ActivityPreview_percent_field_name__2pqpU {\n  display: inline-block;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  width: 70%;\n}\n\n.ActivityPreview_percent_field_value__2FOrM {\n  display: inline-block;\n  color: #3a84b3;\n  font-weight: bold;\n  width: 15%;\n  padding-left: 5%;\n  padding-top: 10px;\n  vertical-align: top;\n}\n\n.ActivityPreview_project_cost_left__eDeh4 {\n  display: inline-block;\n  width: 55%;\n  background-color: #f8fff5;\n  margin-left: 10px;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_right__Y_NyF {\n  display: inline-block;\n  width: 43%;\n  padding-left: 20px;\n  padding-top: 10px;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_project_cost_title__1FhPK {\n  display: block;\n  font-size: 0.85em;\n  color: #767676;\n  font-weight: bold;\n  margin-bottom: 5px\n}\n\n.ActivityPreview_project_cost_currency__3Kqw4 {\n  display: block;\n  width: 100%;\n  font-size: 2em;\n  text-align: right;\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\n\n.ActivityPreview_project_cost_date__1FQIr {\n  display: block;\n  width: 100%;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: bold;\n  line-height: 30px;\n}\n\n.ActivityPreview_sector_title__2C01I {\n  background-color: #f4f4f4;\n  color: #9d9d9d;\n  border-top: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 0.85em;\n  font-weight: bold;\n}\n\n.ActivityPreview_inline__24u9t {\n  display: inline;\n}\n\n.ActivityPreview_block__1Thcz {\n  display: block;\n}\n\n.ActivityPreview_flex__cqbOH {\n  display: flex;\n}\n\n.ActivityPreview_hidden__2fpOd {\n  display: none;\n}\n\n.ActivityPreview_table_raw__30FeG {\n  display: table-row;\n}\n\n\n.ActivityPreview_alignRight__3vSRs {\n  text-align: right;\n}\n\n.ActivityPreview_tableCell__ePAEq {\n  padding-left: 10px;\n}\n\n.ActivityPreview_tableValue__2rOMc {\n  width: 100%;\n  float: left;\n  font-weight: bold;\n}\n\n.ActivityPreview_paddingBottom__xqyvT {\n  padding-bottom: 10px;\n}\n\n.ActivityPreview_paddingBottomLarge__3uVPO {\n  padding-bottom: 20px;\n}\n\n.ActivityPreview_box_table2__11qOl {\n  width: 100%;\n}\n\n.ActivityPreview_box_table2__11qOl td {\n  width: 33%;\n  padding-left: 20px;\n}\n\n.ActivityPreview_box_table2__11qOl tr td:nth-child(2) {\n  border-left: 1px solid #ebebeb;\n  border-right: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_inner_cell__2bfUh {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-left: 1px solid #ebebeb;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_tablify_outer_cell__F_Nuk {\n  display: inline-block;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ebebeb;\n}\n\n.ActivityPreview_nodata__I-8qU {\n  padding-left: 10px;\n  padding-bottom: 10px;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.ActivityPreview_noborder__1sM6U {\n  border: 0;\n}\n\n.ActivityPreview_top_warning_text__360ag {\n  color: red;\n  margin-left: 10px;\n  padding: 5px;\n  display: inline-block;\n  width: 100%;\n}\n\n.ActivityPreview_structure_title__3pAlL {\n  background-color: #f4f4f4;\n  color: #3a84b3;\n  border: 1px solid #ebebeb;\n  padding: 8px;\n  margin-bottom: 15px;\n  font-size: 1.2em;\n  font-weight: bold;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.ActivityPreview_structures_coordinates_table__kBTDh {\n  width: 50%;\n}\n\n.ActivityPreview_structures_coordinates_value__3cFsq {\n  border: none;\n  font-weight: bold;\n}\n";
var styles = { "preview_container": "ActivityPreview_preview_container__3tai0", "preview_title": "ActivityPreview_preview_title__1GDjY", "preview_icons": "ActivityPreview_preview_icons__3i4Vs", "preview_status_container": "ActivityPreview_preview_status_container__2Thby", "inline_flex": "ActivityPreview_inline_flex__1pvo5", "preview_status_title": "ActivityPreview_preview_status_title__27GZY", "preview_status_detail": "ActivityPreview_preview_status_detail__D9NiA", "status_title_class": "ActivityPreview_status_title_class__1Bw1H", "status_group_class": "ActivityPreview_status_group_class__213C2", "preview_categories": "ActivityPreview_preview_categories__1YrSS", "preview_category_selected": "ActivityPreview_preview_category_selected__2gHPF", "preview_content": "ActivityPreview_preview_content__3ndG2", "preview_summary": "ActivityPreview_preview_summary__2M11Q", "summary_container": "ActivityPreview_summary_container__3c2Lt", "summary_section_title": "ActivityPreview_summary_section_title__2yAmt", "summary_section_group": "ActivityPreview_summary_section_group__1prJe", "summary_field_name": "ActivityPreview_summary_field_name__2ii3f", "summary_field_value": "ActivityPreview_summary_field_value__16N-w", "main_group_container": "ActivityPreview_main_group_container__4QVQf", "section_title_class": "ActivityPreview_section_title_class__1t12o", "section_group_class": "ActivityPreview_section_group_class__3WIHL", "section_subtitle_class": "ActivityPreview_section_subtitle_class__1RBXN", "section_field_name": "ActivityPreview_section_field_name__2mQY7", "section_field_value": "ActivityPreview_section_field_value__3h0kd", "box_container": "ActivityPreview_box_container__Xe8ey", "box_table": "ActivityPreview_box_table__1zo_q", "two_box_table": "ActivityPreview_two_box_table__2w-_w", "box_field_name": "ActivityPreview_box_field_name__1rDaU", "box_field_value": "ActivityPreview_box_field_value__1j3If", "box_field_value_tight": "ActivityPreview_box_field_value_tight__1D_p0", "percent_field_name": "ActivityPreview_percent_field_name__2pqpU", "percent_field_value": "ActivityPreview_percent_field_value__2FOrM", "project_cost_left": "ActivityPreview_project_cost_left__eDeh4", "project_cost_right": "ActivityPreview_project_cost_right__Y_NyF", "project_cost_title": "ActivityPreview_project_cost_title__1FhPK", "project_cost_currency": "ActivityPreview_project_cost_currency__3Kqw4", "project_cost_date": "ActivityPreview_project_cost_date__1FQIr", "sector_title": "ActivityPreview_sector_title__2C01I", "inline": "ActivityPreview_inline__24u9t", "block": "ActivityPreview_block__1Thcz", "flex": "ActivityPreview_flex__cqbOH", "hidden": "ActivityPreview_hidden__2fpOd", "table_raw": "ActivityPreview_table_raw__30FeG", "alignRight": "ActivityPreview_alignRight__3vSRs", "tableCell": "ActivityPreview_tableCell__ePAEq", "tableValue": "ActivityPreview_tableValue__2rOMc", "paddingBottom": "ActivityPreview_paddingBottom__xqyvT", "paddingBottomLarge": "ActivityPreview_paddingBottomLarge__3uVPO", "box_table2": "ActivityPreview_box_table2__11qOl", "tablify_inner_cell": "ActivityPreview_tablify_inner_cell__2bfUh", "tablify_outer_cell": "ActivityPreview_tablify_outer_cell__F_Nuk", "nodata": "ActivityPreview_nodata__I-8qU", "noborder": "ActivityPreview_noborder__1sM6U", "top_warning_text": "ActivityPreview_top_warning_text__360ag", "structure_title": "ActivityPreview_structure_title__3pAlL", "structures_coordinates_table": "ActivityPreview_structures_coordinates_table__kBTDh", "structures_coordinates_value": "ActivityPreview_structures_coordinates_value__3cFsq" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Simple Field component that consists of a field title and field value
 * @author Nadejda Mandrescu
 */

var TestAPField = function (_Component) {
  inherits(TestAPField, _Component);
  createClass(TestAPField, null, [{
    key: 'instance',

    /**
     * Gets an instance of Simple Field
     * @param trnLabel the label to translate and use as a title. This label is also used as the component key.
     * @param value the field value
     * @param inline show title and value in the same row.
     * @param separator add or not an <hr> tag.
     * @param nameClass css class for the field label
     * @param valueClass css class for the field value
     * @return {SimpleField}
     */
    value: function instance(trnLabel, value) {
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var nameClass = arguments[4];
      var valueClass = arguments[5];

      return React.createElement(TestAPField, {
        key: trnLabel, title: this.props.translate(trnLabel), value: value, inline: inline, separator: separator,
        fieldNameClass: nameClass, fieldValueClass: valueClass });
    }
  }]);

  function TestAPField(props) {
    classCallCheck(this, TestAPField);

    var _this = possibleConstructorReturn(this, (TestAPField.__proto__ || Object.getPrototypeOf(TestAPField)).call(this, props));

    _this.props.ampLogger.log('constructore');
    _this.useSeparator = _this.props.separator !== false;
    _this.displayClass = _this.props.fieldClass || (_this.props.inline === true ? styles.inline : styles.block);
    return _this;
  }

  createClass(TestAPField, [{
    key: '_getValue',
    value: function _getValue() {
      var classNames = this.props.fieldValueClass + ' ' + this.displayClass;
      // To handle boolean fields we dont want to show 'false' as 'No Data'.
      var value = this.props.value || this.props.value === false ? this.props.value : this.props.translate('No Data');
      var displayValue = void 0;
      if (Array.isArray(value)) {
        if (value[0] instanceof Object) {
          displayValue = [];
          value.forEach(function (v) {
            return displayValue.push(v);
          });
        } else {
          displayValue = value.sort().join(', ');
        }
      } else if (typeof value === 'boolean') {
        displayValue = value === true ? this.props.translate('Yes') : this.props.translate('No');
      } else {
        displayValue = this.props.inline && this.props.value instanceof String ? value + ' ' : value;
      }
      if (this.props.useInnerHTML) {
        return React.createElement('div', { className: classNames, dangerouslySetInnerHTML: { __html: displayValue } });
      } else {
        return React.createElement(
          'div',
          { className: classNames },
          displayValue
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = this.props.fieldNameClass + ' ' + this.displayClass;
      return React.createElement(
        'div',
        { className: this.displayClass },
        React.createElement(
          'div',
          { className: classNames },
          this.props.title
        ),
        this._getValue(),
        this.useSeparator ? React.createElement('hr', null) : ''
      );
    }
  }]);
  return TestAPField;
}(Component);


TestAPField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  inline: PropTypes.bool,
  useInnerHTML: PropTypes.bool,
  fieldClass: PropTypes.string,
  fieldNameClass: PropTypes.string,
  fieldValueClass: PropTypes.string,
  separator: PropTypes.bool,
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

var TestingSection = function (_Component) {
  inherits(TestingSection, _Component);

  function TestingSection() {
    classCallCheck(this, TestingSection);
    return possibleConstructorReturn(this, (TestingSection.__proto__ || Object.getPrototypeOf(TestingSection)).apply(this, arguments));
  }

  createClass(TestingSection, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'testing component'
        ),
        React.createElement(
          'div',
          null,
          'test translation: `DESKTOP = ',
          this.props.translate('DESKTOP'),
          '`'
        ),
        React.createElement(
          'div',
          null,
          'test APField:',
          React.createElement(TestAPField, { ampLogger: this.props.ampLogger, translate: this.props.translate })
        )
      );
    }
  }]);
  return TestingSection;
}(Component);

TestingSection.propTypes = {
  ampLogger: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

var BASE_REST_URL = '/rest';

var CONNECTION_TIMEOUT = 25000;
var CONNECTION_FORCED_TIMEOUT = CONNECTION_TIMEOUT + 5000;
var TIMEOUT_CHECK_INTERVAL = 5000;
var MAX_RETRY_ATEMPTS = 5;
var ERRORS_TO_RETRY = ['ESOCKETTIMEDOUT', 'ETIMEDOUT', 'ECONNRESET', 'EAI_AGAIN'];
var ERRORS_NO_AMP_SERVER = ['ECONNREFUSED', 'ENETUNREACH', 'ENOENT', 'ENOTFOUND', 'ENETDOWN', 'EHOSTDOWN', 'EHOSTUNREACH', 'ENONET'];
var CONNECTIVITY_CHECK_INTERVAL = '60000'; // 1 minutes

var WORKSPACE_URL = '/workspace';
var LOGIN_URL = '/';
var DESKTOP_URL = '/desktop';
var DESKTOP_CURRENT_URL = '/desktop/current';
var SYNCUP_REDIRECT_URL = '/syncUp/sync';
var SYNCUP_HISTORY_TARGET = 'history';
var SYNCUP_SUMMARY_URL = '/syncUpSummary';
var ACTIVITY_PREVIEW_URL = '/activity/preview';
var ACTIVITY_EDIT_URL = '/activity/edit';
var UPDATE_URL = '/update';
var SETUP_URL = '/setup';
var SETTINGS_URL = '/settings';

var COLLECTION_USERS = 'users';
var COLLECTION_WORKPACES = 'workspaces';
var COLLECTION_TEAMMEMBERS = 'teammembers';
var COLLECTION_CLIENT_SETTINGS = 'client-settings';
var COLLECTION_GLOBAL_SETTINGS = 'global-settings';
var COLLECTION_ACTIVITIES = 'activities';
var COLLECTION_FIELDS = 'fields';
var COLLECTION_POSSIBLE_VALUES = 'possible-values';
var COLLECTION_SYNCUP_LOG = 'syncup-log';
var COLLECTION_LANGS = 'languages';
var COLLECTION_WS_SETTINGS = 'workspace-settings';
var COLLECTION_CURRENCY_RATES = 'currency-rates';
var COLLECTION_FEATURE_MANAGER = 'feature-manager';
var COLLECTION_CONTACTS = 'contacts';
var COLLECTION_RESOURCES = 'resources';
var COLLECTION_REPOSITORY = 'repository';
var COLLECTION_GAZETTEER = 'gazetteer';
var COLLECTION_CALENDARS = 'calendars';
var COLLECTION_CHANGESETS = 'changesets';

var GAZETTEER_DISTANCE_DIVIDE = 3;

var DB_FILE_PREFIX = 'database';
var DB_FILE_EXTENSION = '.db';
var DB_COMMON_DATASTORE_OPTIONS = { autoload: false, corruptAlertThreshold: 0 };
var DB_AUTOCOMPACT_INTERVAL_MILISECONDS = 60000;
var DB_DEFAULT_QUERY_LIMIT = 999999999;

var LANGUAGE_ENGLISH = 'en';
var FS_LOCALES_DIRECTORY = 'lang';
var LANGUAGE_MASTER_TRANSLATIONS_FILE = 'master-translations';
var LANGUAGE_TRANSLATIONS_FILE = 'translations';
var LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC = 'must_sync_translation.json';

var ASAR_DIR = 'app.asar';
var APP_DIRECTORY = 'app';
var TEST_DIRECTORY = 'test';
var STATIC_DIR = 'static';
var IMAGES_DIR = 'images';
var DOC_ICONS = 'doc-icons';
var DB_STATIC_DIR = 'db';
var MIGRATIONS_DIR = 'changelog';

var HASH_ITERATIONS = 100;
var DIGEST_ALGORITHM_SHA1 = 'SHA-1';
var DIGEST_ALGORITHM_SHA256 = 'SHA-256';

var ACTIVITY_EDIT = 'ACTIVITY_EDIT';
var ACTIVITY_VIEW = 'ACTIVITY_VIEW';

var SYNCUP_FORCE_DAYS = 14;
var SYNCUP_BEST_BEFORE_DAYS = 7;
var SYNCUP_NO_DATE = '1900-01-01T00:00:00.000+0000';
var SYNCUP_TYPE_TRANSLATIONS = 'translations';
var SYNCUP_TYPE_USERS = 'users';
var SYNCUP_TYPE_ASSETS = 'assets';
var SYNCUP_TYPE_WORKSPACES = 'workspaces';
var SYNCUP_TYPE_GS = 'global-settings';
var SYNCUP_TYPE_EXCHANGE_RATES = 'exchange-rates';
var SYNCUP_TYPE_FEATURE_MANAGER = 'feature-manager';
var SYNCUP_TYPE_WORKSPACE_MEMBERS = 'workspace-members';
var SYNCUP_TYPE_ALL_FIELDS = 'fields';
var SYNCUP_TYPE_ACTIVITIES_PULL = 'activities';
var SYNCUP_TYPE_ACTIVITIES_PUSH = 'activities-push';
var SYNCUP_TYPE_ACTIVITY_FIELDS = 'activity-fields';
var SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES = 'activity-fields-structural-changes';
var SYNCUP_TYPE_CONTACTS_PULL = 'contacts';
var SYNCUP_TYPE_CONTACTS_PUSH = 'contacts-push';
var SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES = 'activity-possible-values-fields';
var SYNCUP_TYPE_CONTACT_FIELDS = 'contact-fields';
var SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES = 'contact-fields-structural-changes';
var SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES = 'contact-possible-values-fields';
var SYNCUP_TYPE_RESOURCES_PULL = 'resources';
var SYNCUP_TYPE_RESOURCES_PUSH = 'resources-push';
var SYNCUP_TYPE_RESOURCE_FIELDS = 'resource-fields';
var SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES = 'resource-fields-structural-changes';
var SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES = 'resource-possible-values-fields';
var SYNCUP_TYPE_COMMON_POSSIBLE_VALUES = 'common-possible-values-fields';
var SYNCUP_TYPE_WORKSPACE_SETTINGS = 'workspace-settings';
var SYNCUP_TYPE_MAP_TILES = 'map-tiles';
var SYNCUP_TYPE_GAZETTEER = 'locators';
var SYNCUP_TYPE_CALENDARS = 'calendars';

var SYNCUP_STATUS_SUCCESS = 'SUCCESS';
var SYNCUP_STATUS_FAIL = 'FAIL';
var SYNCUP_STATUS_PARTIAL = 'PARTIAL';
var SYNCUP_STATUS_CANCELED = 'CANCELED';
var SYNCUP_SYNC_REQUESTED_AT = 'sync-date';
var SYNCUP_SYNC_REQUESTED_BY = 'requested-by';
var SYNCUP_DATETIME_FIELD = 'timestamp';
var SYNCUP_DIFF_LEFTOVER = 'syncup-diff-leftover';
var SYNCUP_DEPENDENCY_CHECK_INTERVAL = 10;
var SYNCUP_DETAILS_SYNCED = 'synced';
var SYNCUP_DETAILS_UNSYNCED = 'unsynced';
var SYNCUP_RESOURCE_PULL_BATCH_SIZE = 100;
var SYNCUP_ACTIVITIES_PULL_BATCH_SIZE = 100;
var SYNCUP_CONTACTS_PULL_BATCH_SIZE = 100;

var ACTIVITY_STATUS_DRAFT = 'ACTIVITY_STATUS_DRAFT';
var ACTIVITY_STATUS_UNVALIDATED = 'ACTIVITY_STATUS_UNVALIDATED';
var ACTIVITY_STATUS_VALIDATED = 'ACTIVITY_STATUS_VALIDATED';

var CURRENCY_HOUR = '00:00';
var DEFAULT_CURRENCY = 'USD';
var RATE_SAME_CURRENCY = 1;
var RATE_CURRENCY_NOT_FOUND = 1;
var CURRENCY_PAIR = 'currency-pair';
var VERSION_PATTERN = /(\d+)\.(\d+)(\.(\d+))?(-\w+)?/;
var VERSION_PATTERN_GROUPS_TO_EXTRACT = [1, 2, 4, 5];
var AMP_COUNTRY_LOGO = 'ampCountryFlag.png';
var ASSETS_DIRECTORY = 'assets';
var BASE_64_PNG_PREFIX = 'data:image/png;base64,';
// Holds the BASE64 representation of a a transparent image 1x1 in case we don't yet have the country flag
var TRANSPARENT_FLAG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=';
var HELP_PDF_FILENAME = 'amp-help';
var HELP_DIR = 'help';
var ENDS_WITH_PUNCTUATION_REGEX = /[.!?,;:]$/;

var MAP_TILES_DIR = 'map-tiles';
var TILES_ZIP_FILE = 'map-tiles.zip';

/* eslint-disable max-len */
var MAP_MARKER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';
var MAP_MARKER_SHADOW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';
var MAP_MARKER_CIRCLE_RED = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4gcbFwogeohhEAAAA1lJREFUOMullc1rHGUcxz+/Z2Z20zGE7luyQbyIdiExre6aNvSySEBBKB71VAI5mGJA9g8QpR48aVGK6K160ptYD7Wxh4CUkJrFGpKyKWgQmnXfaZt9yWaeeTzsTExj1YO/0/DMzGd+b9/vCEH8cu51jsQQkAEmgFRwVgM2gRLQO/zwyatfAyCPgUWAV4A5YAZIAnZwzwPqwApwBfge6B+GyhFYGngXOA+4ABjzaN4i4VUH+BJ4D6iEh/YR2GfAawcgY1BPuFjDwwDo3V38dmcAFXGBBWAceDOEhsBIkNkA5vs4yQSx2Twjp3PY8dig3maL+6trtG4s49UboBTBO2XgbaBvXcg8B/Aq8D7g4PsMPfM0TxXews0+zx937vD78o9UNzbRjk3qpTwjL5yk++s2XqMZtmAC+BnYsoNpzgEuxuAkEzx5YZ6+Y1N85yK19Q2M5w3aZ9ukpibJFhYZX5jntw8+hGYrLH8OWFLBasyEfYvN5rHGRileukyleBuMQSwLsSwwhkrxNsVLl7HTo0TzZ+l6HsGYZoCMCtJNhgMYOZ2jvPoTtfUNlG0d3U2UbVFb36Bya434mWlqCjoDaBKYUMHS2gDW8DB2PEZr6+5BmY8L43k0S1u4yQS+e4ydTpuO1rZAyub/hgg97VHutjkeiaIYyMkL98xrtohlnkXsf/6W2DbxzAm69Qb9Bw8REXpa71d73apioM06IvjtDvdX1xiffpHU1CS+p/8G8z1NamqS9HSOezdX2G+3QQSBusCmYiD0lTD91o1ldKVKtrDIWPYUiGC0xmgNIoxlT5ErLLK7U2b72tJhKa44SpVCLZ8DvgLccLHHF+ax06NUbq3RLG0BEM+cID2dY3enzNpHn9As3UUGamlbIm/4xnwXAiPAx4E2wfchESeaP0v8zDRuMgFAt97g3s0Vtq8t0anWQhgCn0Ytq+Ab0z/sNmPA54fNoet51BT47jEQof/g4V89C0oV+MYStWAwFYU84jYVBq5RBs4j4rqOQ8rz2Kk16GkPETnICmgLfGGJuuhjKr4xxIei/22wAsmu1vZOt01P630JDFaJXHGUur7v+31tDPFIlJd/uMrBiP7tFyCQavT3qPa6VYFNR6nSntZ7jlIY4Hgkwuz1bwH4E5mCXIBLQ5HnAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTI3VDIxOjEwOjMyKzAyOjAw7q6GnwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0yN1QyMToxMDozMiswMjowMJ/zPiMAAAAASUVORK5CYII=';
var MAP_MARKER_CIRCLE_GREEN = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gcbFBg6/VhW4AAAA5VJREFUOMullUFoHFUYx3/vzexku8VkdzPrpgpWNJom4Jo0NaSnIkHrJRb1UFAsXmq3KlivJqCHhJ4qsQdtmksVFKQgYkTa0ErxUCMhad1CQrQ0DbaJ291kd91kJrs7M89DZpo0BBT8z2V47/F73/fe9/+ewFem9zCb1T8YDQMtQBuQ8IdzwDQwO9BXXNu8PjX6DQBiK6x/MGoAB4G3gG7ABHR/2gHywDhwDrg40FesboaKLbAm4CPgCBAB8PAeiFwig18L+BL4eKCvmN2YfxB2BkgDEY/1LyJ3kAyZJEMmEbmDYNzfMA0M9w9GkwFHZHoPB2l+6i/Aw6MxFKMntp+u+hRxvQGAZafEROkGlwtXyTuFzdGeAd4f6CtWg7M56KeJh0dzeDfHH32dpNbIxGKGS4WfAWiJNdO763m66lN8fvdrbq7NB9AjwI/AqHg5cywMfAW8GkT24WNp9KrG0NQImfwMjucAoEudlNnKib1HqeoVTs6dZZlSAP0WeEP6pdEdxN4T209Sa2RoaoTJ7HWUUmhCQxMaSikms9cZmhqhSX+YA3X7cG0HJRQ+o0X6dWYGF9BVn+LXxWtk8jPo0mCrdGmQyc8wkf2N7ngHIufiWDWUUCbQJv2i1QEe0nYS1xv4ozB3P83t5HgOvy/fwozEiXhhrIUynuXqSqiE5H9KInArDtZfZWpLFXTfTg5glN1Vlp0SLbFmdKmjlNoWokudp+NPkLOXKNXKCCFwbadmV1fuSd+beYnE8mwmSjd4bleKlNmK41W3SbdKymylq6mdX+5OslqzEEqAJA9MS2DW9yYAlwtXybpLnNh7lM5k+/ruysVVLkIIOpPtfND5NgsrWS7cvrIOW9e4NLRZ7fydZuennrANHBKI0Kpnc8v+k46GPfTufoEno4/zyM4kz5h7eOWpl3iz7TUKayVOTQ4zX76DFBJgVUjRf3zo75nAKRd9o6clkptr85ycO8uBun10xzt4NtG23rvsJc7P/sCF21fI2rkN60m+kIY2FpJyo9v4Bh8GDgUWdG0HkXOJeGEkglKtfP/MhBAB7DuhqfR7p62sRGy4229Bx3yjWxKJHgmhEho5d5kFK4vl2EhkAFtF8pnQVPrd01bWVYponfHvDVYJZbq2o9uLK7i2U/Nvc1wIcU4a2tg7n5SqrlLEjTpevDSK+C9PgBIqUVuqYOdW7gHT0tBm06eKlZCUKCBqGPSMfQ/APy1Xg2v6KIsFAAAAAElFTkSuQmCC';
/* eslint-enable max-len */
var POLYGON_BASE_COLOR = '#3388ff';

var DG_COMPANY_NAME = 'Development Gateway';
var DG_ADDRESS_1 = '1110 Vermont Ave, NW, Suite 500';
var DG_ADDRESS_2 = 'Washington, DC 20005 USA';
var DG_CONTACT_INFO = 'info@developmentgateway.org, Tel: +1.202.572.9200, Fax: +1 202.572.9290';

var LOG_DIR = 'logs';
var LOG_FILE_NAME = 'ampoffline';
var LOG_FILE_EXTENSION = 'log';

// Message constants
// total amount of time the message stays visible
var MESSAGE_TIMEOUT = 10 * 1000;
// when it's this amount of time left, we nofity the user that the message is about to disappear
var MESSAGE_DISAPPEAR_TIMEOUT = MESSAGE_TIMEOUT / 5;
var MESSAGE_CHECK_INTERVAL = 100;
// how long should the enter/leave animation run(ms)
// (if you change this you'll wanna change it in style.css, too)
var MESSAGE_ANIMATION_DURATION = 500;

// this is the internal date format used to store and sync up dates
var INTERNAL_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
// currently supported max & min years in AMP, i.e. from 1970-01-01 till 2050-12-31
var MIN_SUPPORTED_YEAR = 1970;
var MAX_SUPPORTED_YEAR = 2050;

var UPDATES_DIR = 'updates';
var CONTENT_DISPOSITION_HEADER = 'Content-Disposition';
var UPDATE_TMP_FILE = 'amp-offline-installer.tmp';

var OTHER_ID = 999999999;
var NR_SYNC_HISTORY_ENTRIES = 20;
var NR_LOG_FILES = 100;
// https://en.wikipedia.org/wiki/ISO_8601#Durations, example: "P1Y2M10DT2H30M"
var OLD_SYNC_LOGS_DURATION_ISO_8601 = 'P6M';
var NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM = NR_SYNC_HISTORY_ENTRIES;

var MASTER_BRANCH = 'master';
var DEVELOP_BRANCH = 'develop';
var RELEASE_BRANCH_REGEX = /release\//;
var RELEASE_BRANCHES = [MASTER_BRANCH, RELEASE_BRANCH_REGEX];

var DISABLE_CHANGELOGS = 'DISABLE_CHANGELOGS';

var Constants = Object.freeze({
  BASE_REST_URL: BASE_REST_URL,
  CONNECTION_TIMEOUT: CONNECTION_TIMEOUT,
  CONNECTION_FORCED_TIMEOUT: CONNECTION_FORCED_TIMEOUT,
  TIMEOUT_CHECK_INTERVAL: TIMEOUT_CHECK_INTERVAL,
  MAX_RETRY_ATEMPTS: MAX_RETRY_ATEMPTS,
  ERRORS_TO_RETRY: ERRORS_TO_RETRY,
  ERRORS_NO_AMP_SERVER: ERRORS_NO_AMP_SERVER,
  CONNECTIVITY_CHECK_INTERVAL: CONNECTIVITY_CHECK_INTERVAL,
  WORKSPACE_URL: WORKSPACE_URL,
  LOGIN_URL: LOGIN_URL,
  DESKTOP_URL: DESKTOP_URL,
  DESKTOP_CURRENT_URL: DESKTOP_CURRENT_URL,
  SYNCUP_REDIRECT_URL: SYNCUP_REDIRECT_URL,
  SYNCUP_HISTORY_TARGET: SYNCUP_HISTORY_TARGET,
  SYNCUP_SUMMARY_URL: SYNCUP_SUMMARY_URL,
  ACTIVITY_PREVIEW_URL: ACTIVITY_PREVIEW_URL,
  ACTIVITY_EDIT_URL: ACTIVITY_EDIT_URL,
  UPDATE_URL: UPDATE_URL,
  SETUP_URL: SETUP_URL,
  SETTINGS_URL: SETTINGS_URL,
  COLLECTION_USERS: COLLECTION_USERS,
  COLLECTION_WORKPACES: COLLECTION_WORKPACES,
  COLLECTION_TEAMMEMBERS: COLLECTION_TEAMMEMBERS,
  COLLECTION_CLIENT_SETTINGS: COLLECTION_CLIENT_SETTINGS,
  COLLECTION_GLOBAL_SETTINGS: COLLECTION_GLOBAL_SETTINGS,
  COLLECTION_ACTIVITIES: COLLECTION_ACTIVITIES,
  COLLECTION_FIELDS: COLLECTION_FIELDS,
  COLLECTION_POSSIBLE_VALUES: COLLECTION_POSSIBLE_VALUES,
  COLLECTION_SYNCUP_LOG: COLLECTION_SYNCUP_LOG,
  COLLECTION_LANGS: COLLECTION_LANGS,
  COLLECTION_WS_SETTINGS: COLLECTION_WS_SETTINGS,
  COLLECTION_CURRENCY_RATES: COLLECTION_CURRENCY_RATES,
  COLLECTION_FEATURE_MANAGER: COLLECTION_FEATURE_MANAGER,
  COLLECTION_CONTACTS: COLLECTION_CONTACTS,
  COLLECTION_RESOURCES: COLLECTION_RESOURCES,
  COLLECTION_REPOSITORY: COLLECTION_REPOSITORY,
  COLLECTION_GAZETTEER: COLLECTION_GAZETTEER,
  COLLECTION_CALENDARS: COLLECTION_CALENDARS,
  COLLECTION_CHANGESETS: COLLECTION_CHANGESETS,
  GAZETTEER_DISTANCE_DIVIDE: GAZETTEER_DISTANCE_DIVIDE,
  DB_FILE_PREFIX: DB_FILE_PREFIX,
  DB_FILE_EXTENSION: DB_FILE_EXTENSION,
  DB_COMMON_DATASTORE_OPTIONS: DB_COMMON_DATASTORE_OPTIONS,
  DB_AUTOCOMPACT_INTERVAL_MILISECONDS: DB_AUTOCOMPACT_INTERVAL_MILISECONDS,
  DB_DEFAULT_QUERY_LIMIT: DB_DEFAULT_QUERY_LIMIT,
  LANGUAGE_ENGLISH: LANGUAGE_ENGLISH,
  FS_LOCALES_DIRECTORY: FS_LOCALES_DIRECTORY,
  LANGUAGE_MASTER_TRANSLATIONS_FILE: LANGUAGE_MASTER_TRANSLATIONS_FILE,
  LANGUAGE_TRANSLATIONS_FILE: LANGUAGE_TRANSLATIONS_FILE,
  LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC: LANGUAGE_NEW_TRANSLATIONS_MUST_SYNC,
  ASAR_DIR: ASAR_DIR,
  APP_DIRECTORY: APP_DIRECTORY,
  TEST_DIRECTORY: TEST_DIRECTORY,
  STATIC_DIR: STATIC_DIR,
  IMAGES_DIR: IMAGES_DIR,
  DOC_ICONS: DOC_ICONS,
  DB_STATIC_DIR: DB_STATIC_DIR,
  MIGRATIONS_DIR: MIGRATIONS_DIR,
  HASH_ITERATIONS: HASH_ITERATIONS,
  DIGEST_ALGORITHM_SHA1: DIGEST_ALGORITHM_SHA1,
  DIGEST_ALGORITHM_SHA256: DIGEST_ALGORITHM_SHA256,
  ACTIVITY_EDIT: ACTIVITY_EDIT,
  ACTIVITY_VIEW: ACTIVITY_VIEW,
  SYNCUP_FORCE_DAYS: SYNCUP_FORCE_DAYS,
  SYNCUP_BEST_BEFORE_DAYS: SYNCUP_BEST_BEFORE_DAYS,
  SYNCUP_NO_DATE: SYNCUP_NO_DATE,
  SYNCUP_TYPE_TRANSLATIONS: SYNCUP_TYPE_TRANSLATIONS,
  SYNCUP_TYPE_USERS: SYNCUP_TYPE_USERS,
  SYNCUP_TYPE_ASSETS: SYNCUP_TYPE_ASSETS,
  SYNCUP_TYPE_WORKSPACES: SYNCUP_TYPE_WORKSPACES,
  SYNCUP_TYPE_GS: SYNCUP_TYPE_GS,
  SYNCUP_TYPE_EXCHANGE_RATES: SYNCUP_TYPE_EXCHANGE_RATES,
  SYNCUP_TYPE_FEATURE_MANAGER: SYNCUP_TYPE_FEATURE_MANAGER,
  SYNCUP_TYPE_WORKSPACE_MEMBERS: SYNCUP_TYPE_WORKSPACE_MEMBERS,
  SYNCUP_TYPE_ALL_FIELDS: SYNCUP_TYPE_ALL_FIELDS,
  SYNCUP_TYPE_ACTIVITIES_PULL: SYNCUP_TYPE_ACTIVITIES_PULL,
  SYNCUP_TYPE_ACTIVITIES_PUSH: SYNCUP_TYPE_ACTIVITIES_PUSH,
  SYNCUP_TYPE_ACTIVITY_FIELDS: SYNCUP_TYPE_ACTIVITY_FIELDS,
  SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_ACTIVITY_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_CONTACTS_PULL: SYNCUP_TYPE_CONTACTS_PULL,
  SYNCUP_TYPE_CONTACTS_PUSH: SYNCUP_TYPE_CONTACTS_PUSH,
  SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES: SYNCUP_TYPE_ACTIVITY_POSSIBLE_VALUES,
  SYNCUP_TYPE_CONTACT_FIELDS: SYNCUP_TYPE_CONTACT_FIELDS,
  SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_CONTACT_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES: SYNCUP_TYPE_CONTACT_POSSIBLE_VALUES,
  SYNCUP_TYPE_RESOURCES_PULL: SYNCUP_TYPE_RESOURCES_PULL,
  SYNCUP_TYPE_RESOURCES_PUSH: SYNCUP_TYPE_RESOURCES_PUSH,
  SYNCUP_TYPE_RESOURCE_FIELDS: SYNCUP_TYPE_RESOURCE_FIELDS,
  SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES: SYNCUP_TYPE_RESOURCE_FIELDS_STRUCTURAL_CHANGES,
  SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES: SYNCUP_TYPE_RESOURCE_POSSIBLE_VALUES,
  SYNCUP_TYPE_COMMON_POSSIBLE_VALUES: SYNCUP_TYPE_COMMON_POSSIBLE_VALUES,
  SYNCUP_TYPE_WORKSPACE_SETTINGS: SYNCUP_TYPE_WORKSPACE_SETTINGS,
  SYNCUP_TYPE_MAP_TILES: SYNCUP_TYPE_MAP_TILES,
  SYNCUP_TYPE_GAZETTEER: SYNCUP_TYPE_GAZETTEER,
  SYNCUP_TYPE_CALENDARS: SYNCUP_TYPE_CALENDARS,
  SYNCUP_STATUS_SUCCESS: SYNCUP_STATUS_SUCCESS,
  SYNCUP_STATUS_FAIL: SYNCUP_STATUS_FAIL,
  SYNCUP_STATUS_PARTIAL: SYNCUP_STATUS_PARTIAL,
  SYNCUP_STATUS_CANCELED: SYNCUP_STATUS_CANCELED,
  SYNCUP_SYNC_REQUESTED_AT: SYNCUP_SYNC_REQUESTED_AT,
  SYNCUP_SYNC_REQUESTED_BY: SYNCUP_SYNC_REQUESTED_BY,
  SYNCUP_DATETIME_FIELD: SYNCUP_DATETIME_FIELD,
  SYNCUP_DIFF_LEFTOVER: SYNCUP_DIFF_LEFTOVER,
  SYNCUP_DEPENDENCY_CHECK_INTERVAL: SYNCUP_DEPENDENCY_CHECK_INTERVAL,
  SYNCUP_DETAILS_SYNCED: SYNCUP_DETAILS_SYNCED,
  SYNCUP_DETAILS_UNSYNCED: SYNCUP_DETAILS_UNSYNCED,
  SYNCUP_RESOURCE_PULL_BATCH_SIZE: SYNCUP_RESOURCE_PULL_BATCH_SIZE,
  SYNCUP_ACTIVITIES_PULL_BATCH_SIZE: SYNCUP_ACTIVITIES_PULL_BATCH_SIZE,
  SYNCUP_CONTACTS_PULL_BATCH_SIZE: SYNCUP_CONTACTS_PULL_BATCH_SIZE,
  ACTIVITY_STATUS_DRAFT: ACTIVITY_STATUS_DRAFT,
  ACTIVITY_STATUS_UNVALIDATED: ACTIVITY_STATUS_UNVALIDATED,
  ACTIVITY_STATUS_VALIDATED: ACTIVITY_STATUS_VALIDATED,
  CURRENCY_HOUR: CURRENCY_HOUR,
  DEFAULT_CURRENCY: DEFAULT_CURRENCY,
  RATE_SAME_CURRENCY: RATE_SAME_CURRENCY,
  RATE_CURRENCY_NOT_FOUND: RATE_CURRENCY_NOT_FOUND,
  CURRENCY_PAIR: CURRENCY_PAIR,
  VERSION_PATTERN: VERSION_PATTERN,
  VERSION_PATTERN_GROUPS_TO_EXTRACT: VERSION_PATTERN_GROUPS_TO_EXTRACT,
  AMP_COUNTRY_LOGO: AMP_COUNTRY_LOGO,
  ASSETS_DIRECTORY: ASSETS_DIRECTORY,
  BASE_64_PNG_PREFIX: BASE_64_PNG_PREFIX,
  TRANSPARENT_FLAG: TRANSPARENT_FLAG,
  HELP_PDF_FILENAME: HELP_PDF_FILENAME,
  HELP_DIR: HELP_DIR,
  ENDS_WITH_PUNCTUATION_REGEX: ENDS_WITH_PUNCTUATION_REGEX,
  MAP_TILES_DIR: MAP_TILES_DIR,
  TILES_ZIP_FILE: TILES_ZIP_FILE,
  MAP_MARKER_IMAGE: MAP_MARKER_IMAGE,
  MAP_MARKER_SHADOW: MAP_MARKER_SHADOW,
  MAP_MARKER_CIRCLE_RED: MAP_MARKER_CIRCLE_RED,
  MAP_MARKER_CIRCLE_GREEN: MAP_MARKER_CIRCLE_GREEN,
  POLYGON_BASE_COLOR: POLYGON_BASE_COLOR,
  DG_COMPANY_NAME: DG_COMPANY_NAME,
  DG_ADDRESS_1: DG_ADDRESS_1,
  DG_ADDRESS_2: DG_ADDRESS_2,
  DG_CONTACT_INFO: DG_CONTACT_INFO,
  LOG_DIR: LOG_DIR,
  LOG_FILE_NAME: LOG_FILE_NAME,
  LOG_FILE_EXTENSION: LOG_FILE_EXTENSION,
  MESSAGE_TIMEOUT: MESSAGE_TIMEOUT,
  MESSAGE_DISAPPEAR_TIMEOUT: MESSAGE_DISAPPEAR_TIMEOUT,
  MESSAGE_CHECK_INTERVAL: MESSAGE_CHECK_INTERVAL,
  MESSAGE_ANIMATION_DURATION: MESSAGE_ANIMATION_DURATION,
  INTERNAL_DATE_FORMAT: INTERNAL_DATE_FORMAT,
  MIN_SUPPORTED_YEAR: MIN_SUPPORTED_YEAR,
  MAX_SUPPORTED_YEAR: MAX_SUPPORTED_YEAR,
  UPDATES_DIR: UPDATES_DIR,
  CONTENT_DISPOSITION_HEADER: CONTENT_DISPOSITION_HEADER,
  UPDATE_TMP_FILE: UPDATE_TMP_FILE,
  OTHER_ID: OTHER_ID,
  NR_SYNC_HISTORY_ENTRIES: NR_SYNC_HISTORY_ENTRIES,
  NR_LOG_FILES: NR_LOG_FILES,
  OLD_SYNC_LOGS_DURATION_ISO_8601: OLD_SYNC_LOGS_DURATION_ISO_8601,
  NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM: NR_OLD_SYNC_LOGS_TO_KEEP_MINIMUM,
  MASTER_BRANCH: MASTER_BRANCH,
  DEVELOP_BRANCH: DEVELOP_BRANCH,
  RELEASE_BRANCH_REGEX: RELEASE_BRANCH_REGEX,
  RELEASE_BRANCHES: RELEASE_BRANCHES,
  DISABLE_CHANGELOGS: DISABLE_CHANGELOGS
});

/* eslint-disable max-len */

/**
 * @author Nadejda Mandrescu
 */

var PUBLIC_VIEW_CHANGE_PASSWORD = '/PUBLIC VIEW/Login - User Management/Change Password';
var PUBLIC_VIEW_TROUBLE_SIGN_IN = '/PUBLIC VIEW/Login - User Management/Trouble signing in';
var ACTIVITY_DELIVERY_RATE = '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate';
var ACTIVITY_PROJECT_ID_AND_PLANNING = '/PROJECT MANAGEMENT/Project ID and Planning';
var ACTIVITY_DURATION_OF_PROJECT = '/PROJECT MANAGEMENT/Project ID and Planning/Planning/Duration of Project';
var ACTIVITY_TEAM_LEADER = '/PROJECT MANAGEMENT/Project ID and Planning/Identification/Data Team Leader';
var ACTIVITY_SAME_AS_PROPOSED_START_DATE = '/Activity Form/Planning/Actual Start Date/Same As Proposed Start Date';
var ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE = '/Activity Form/Planning/Actual Approval Date/Same As Proposed Approval Date';
var ACTIVITY_IDENTIFICATION = '/Activity Form/Identification';
var ACTIVITY_LAST_UPDATED_BY = '/Activity Form/Identification/Activity Last Updated by';
var ACTIVITY_LAST_UPDATED_ON = '/Activity Form/Identification/Activity Updated On';
var ACTIVITY_FUNDING = '/Activity Form/Funding';
var AF_FUNDING_FUNDINGGROUP_FUNDINGITEM = ACTIVITY_FUNDING + '/Funding Group/Funding Item';
var ACTIVITY_SECTORS = '/Activity Form/Sectors';
var ACTIVITY_PRIMARY_SECTORS = '/Activity Form/Sectors/Primary Sectors';
var ACTIVITY_SECONDARY_SECTORS = '/Activity Form/Sectors/Secondary Sectors';

var ACTIVITY_STRUCTURES = '/Activity Form/Structures';
var ACTIVITY_STRUCTURES_ADD_STRUCTURE = ACTIVITY_STRUCTURES + '/Add Structure';

var ACTIVITY_ORGANIZATIONS = '/Activity Form/Organizations';
var ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION = ACTIVITY_ORGANIZATIONS + '/Donor Organization';
var ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY = ACTIVITY_ORGANIZATIONS + '/Beneficiary Agency';
var ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Contracting Agency';
var ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Executing Agency';
var ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY = ACTIVITY_ORGANIZATIONS + '/Implementing Agency';
var ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP = ACTIVITY_ORGANIZATIONS + '/Regional Group';
var ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION = ACTIVITY_ORGANIZATIONS + '/Related Government Organization';
var ACTIVITY_ORGANIZATIONS_SECTOR_GROUP = ACTIVITY_ORGANIZATIONS + '/Sector Group';

var ADD_FUNDING_AUTO = 'Add Funding Item Automatically';
var ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION + '/' + ADD_FUNDING_AUTO;
var ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO = ACTIVITY_ORGANIZATIONS_SECTOR_GROUP + '/' + ADD_FUNDING_AUTO;

var ACTIVITY_FUNDING_SEARCH = ACTIVITY_FUNDING + '/Search Funding Organizations';
var ACTIVITY_FUNDING_SEARCH_ORGANIZATION = ACTIVITY_FUNDING_SEARCH + '/Search Organizations';
var ACTIVITY_FUNDING_SELECT_ORG_TYPE = ACTIVITY_FUNDING_SEARCH + '/Select Organization Type';

var ACTIVITY_PROGRAM = '/Activity Form/Program';
var ACTIVITY_PLANNING = '/Activity Form/Planning';

var ACTIVITY_CONTACT = '/Activity Form/Contacts';
var ACTIVITY_DOCUMENTS_ADD_DOCUMENT = '/Activity Form/Related Documents/Add New Document';
var ACTIVITY_DOCUMENTS_ADD_WEBLINK = '/Activity Form/Related Documents/Add New Web Link';

var ACTIVITY_ISSUES_ADD_ISSUE = '/Activity Form/Issues Section/Add Issue';
var ACTIVITY_ISSUES_DELETE_ISSUE = '/Activity Form/Issues Section/Issue/Delete Item';
var ACTIVITY_ISSUES_ADD_MEASURE = '/Activity Form/Issues Section/Issue/Add Item';
var ACTIVITY_ISSUES_DELETE_MEASURE = '/Activity Form/Issues Section/Issue/Measure/Delete Item';
var ACTIVITY_ISSUES_ADD_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Add Item';
var ACTIVITY_ISSUES_DELETE_ACTOR = '/Activity Form/Issues Section/Issue/Measure/Actor/Delete Item';

var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Disbursements/Disbursements Table/Funding Flows OrgRole Selector/Add Sector Group';

var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Commitments/Commitments Table/Funding Flows OrgRole Selector/Add Sector Group';

var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Implementing Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Contracting Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Beneficiary Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Donor Organization';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Executing Agency';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Regional Group';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Responsible Organization';
var ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/Expenditures/Expenditures Table/Funding Flows OrgRole Selector/Add Sector Group';

var MTEF_PROJECTIONS = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections';
var MTEF_PROJECTIONS_AMOUNT = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Amount';
var MTEF_PROJECTIONS_CURRENCY = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Currency';
var MTEF_PROJECTIONS_PROJECTION = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/MTEF Projection';
var MTEF_PROJECTIONS_DATE = AF_FUNDING_FUNDINGGROUP_FUNDINGITEM + '/MTEF Projections/MTEF Projections Table/Projection Date';

var FeatureManagerConstants = Object.freeze({
  PUBLIC_VIEW_CHANGE_PASSWORD: PUBLIC_VIEW_CHANGE_PASSWORD,
  PUBLIC_VIEW_TROUBLE_SIGN_IN: PUBLIC_VIEW_TROUBLE_SIGN_IN,
  ACTIVITY_DELIVERY_RATE: ACTIVITY_DELIVERY_RATE,
  ACTIVITY_PROJECT_ID_AND_PLANNING: ACTIVITY_PROJECT_ID_AND_PLANNING,
  ACTIVITY_DURATION_OF_PROJECT: ACTIVITY_DURATION_OF_PROJECT,
  ACTIVITY_TEAM_LEADER: ACTIVITY_TEAM_LEADER,
  ACTIVITY_SAME_AS_PROPOSED_START_DATE: ACTIVITY_SAME_AS_PROPOSED_START_DATE,
  ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE: ACTIVITY_SAME_AS_PROPOSED_APPROVAL_DATE,
  ACTIVITY_IDENTIFICATION: ACTIVITY_IDENTIFICATION,
  ACTIVITY_LAST_UPDATED_BY: ACTIVITY_LAST_UPDATED_BY,
  ACTIVITY_LAST_UPDATED_ON: ACTIVITY_LAST_UPDATED_ON,
  ACTIVITY_SECTORS: ACTIVITY_SECTORS,
  ACTIVITY_PRIMARY_SECTORS: ACTIVITY_PRIMARY_SECTORS,
  ACTIVITY_SECONDARY_SECTORS: ACTIVITY_SECONDARY_SECTORS,
  ACTIVITY_STRUCTURES: ACTIVITY_STRUCTURES,
  ACTIVITY_STRUCTURES_ADD_STRUCTURE: ACTIVITY_STRUCTURES_ADD_STRUCTURE,
  ACTIVITY_ORGANIZATIONS: ACTIVITY_ORGANIZATIONS,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION: ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY: ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY: ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY: ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY: ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP: ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP,
  ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION: ACTIVITY_ORGANIZATIONS_RELATED_GOVERNMENT_ORGANIZATION,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP: ACTIVITY_ORGANIZATIONS_SECTOR_GROUP,
  ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_BENEFICIARY_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_CONTRACTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_DONOR_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_EXECUTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_IMPLEMENTING_AGENCY_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_REGIONAL_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_RESPONSIBLE_ORGANIZATION_ADD_FUNDING_AUTO,
  ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO: ACTIVITY_ORGANIZATIONS_SECTOR_GROUP_ADD_FUNDING_AUTO,
  ACTIVITY_FUNDING_SEARCH: ACTIVITY_FUNDING_SEARCH,
  ACTIVITY_FUNDING_SEARCH_ORGANIZATION: ACTIVITY_FUNDING_SEARCH_ORGANIZATION,
  ACTIVITY_FUNDING_SELECT_ORG_TYPE: ACTIVITY_FUNDING_SELECT_ORG_TYPE,
  ACTIVITY_PROGRAM: ACTIVITY_PROGRAM,
  ACTIVITY_PLANNING: ACTIVITY_PLANNING,
  ACTIVITY_CONTACT: ACTIVITY_CONTACT,
  ACTIVITY_DOCUMENTS_ADD_DOCUMENT: ACTIVITY_DOCUMENTS_ADD_DOCUMENT,
  ACTIVITY_DOCUMENTS_ADD_WEBLINK: ACTIVITY_DOCUMENTS_ADD_WEBLINK,
  ACTIVITY_ISSUES_ADD_ISSUE: ACTIVITY_ISSUES_ADD_ISSUE,
  ACTIVITY_ISSUES_DELETE_ISSUE: ACTIVITY_ISSUES_DELETE_ISSUE,
  ACTIVITY_ISSUES_ADD_MEASURE: ACTIVITY_ISSUES_ADD_MEASURE,
  ACTIVITY_ISSUES_DELETE_MEASURE: ACTIVITY_ISSUES_DELETE_MEASURE,
  ACTIVITY_ISSUES_ADD_ACTOR: ACTIVITY_ISSUES_ADD_ACTOR,
  ACTIVITY_ISSUES_DELETE_ACTOR: ACTIVITY_ISSUES_DELETE_ACTOR,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_DISBURSEMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_COMMITMENTS_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_IMPLEMENTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_CONTRACTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_BENEFICIARY_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_DONOR_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_EXECUTING_AGENCY,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_REGIONAL_GROUP,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_RESPONSIBLE_ORGANIZATION,
  ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP: ACTIVITY_EXPENDITURES_FUNDING_FLOWS_ORGROLE_ADD_SECTOR_GROUP,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS,
  MTEF_PROJECTIONS_AMOUNT: MTEF_PROJECTIONS_AMOUNT,
  MTEF_PROJECTIONS_CURRENCY: MTEF_PROJECTIONS_CURRENCY,
  MTEF_PROJECTIONS_PROJECTION: MTEF_PROJECTIONS_PROJECTION,
  MTEF_PROJECTIONS_DATE: MTEF_PROJECTIONS_DATE
});

/**
 * @author Nadejda Mandrescu
 */

// Activity fields
var ACTIVITY_BUDGET = 'activity_budget';
var ACTIVITY_STATUS = 'activity_status';
var STATUS_REASON = 'status_reason';
var FINANCIAL_INSTRUMENT = 'financial_instrument';
var TYPE_OF_IMPLEMENTATION = 'type_of_implementation';
var OBJECTIVE = 'objective';
var RESULTS = 'results';
var BUDGET_CODE_PROJECT_ID = 'budget_code_project_id';
var ACTUAL_APPROVAL_DATE = 'actual_approval_date';
var FUNDINGS = 'fundings';
var FUNDING_DONOR_ORG_ID = 'donor_organization_id';
var IS_DRAFT = 'is_draft';
var ORG_ROLE_ORG_ID = 'organization';
var ADDITIONAL_INFO = 'additional_info';
var PRIMARY_SECTORS = 'primary_sectors';
var SECONDARY_SECTORS = 'secondary_sectors';
var TERTIARY_SECTORS = 'tertiary_sectors';
var TAG_SECTORS = 'tag_sectors';
var SECTOR = 'sector';
var SECTOR_PERCENTAGE = 'sector_percentage';
var FINANCING_INSTRUMENT = 'financing_instrument';
var MODALITIES = 'modalities';
var LINE_MINISTRY_RANK = 'line_ministry_rank';
var GOVERNMENT_AGREEMENT_NUMBER = 'government_agreement_number';
var FUNDING_STATUS = 'funding_status';
var LOCATIONS = 'locations';
var LOCATION = 'location';
var LOCATION_PERCENTAGE = 'location_percentage';
var IMPLEMENTATION_LOCATION = 'implementation_location';
var IMPLEMENTATION_LEVEL = 'implementation_level';
var APPROVAL_STATUS = 'approval_status';
var APPROVED_BY = 'approved_by';
var APPROVAL_DATE = 'approval_date';
var TYPE_OF_ASSISTANCE = 'type_of_assistance';
var EXPENDITURE_CLASS = 'expenditure_class';
var FUNDING_DETAILS = 'funding_details';
var MODE_OF_PAYMENT = 'mode_of_payment';
var FUNDING_CLASSIFICATION_DATE = 'funding_classification_date';
var AGREEMENT = 'agreement';
var DONOR_OBJECTIVE = 'donor_objective';
var CONDITIONS = 'conditions';
var AGREEMENT_CODE = 'code';
var AGREEMENT_TITLE = 'title';
var PROJECT_CATEGORY = 'project_category';
var PROJECT_IMPLEMENTING_UNIT = 'project_implementing_unit';
var ORGANIZATION = 'organization';
var PERCENTAGE = 'percentage';
var AMP_ORGANIZATION_ROLE_ID = 'amp_organization_role_id';
var ROLE = 'role';
var EXECUTING_AGENCY = 'executing_agency';
var CONTRACTING_AGENCY = 'contracting_agency';
var BENEFICIARY_AGENCY = 'beneficiary_agency';
var IMPLEMENTING_AGENCY = 'implementing_agency';
var RESPONSIBLE_ORGANIZATION = 'responsible_organization';
var DONOR_ORGANIZATION = 'donor_organization';
var REGIONAL_GROUP = 'regional_group';
var SECTOR_GROUP = 'sector_group';
var BUDGETS = 'budgets';
var BUDGET_CODE = 'budget_code';
var BUDGET_ORGANIZATION_CODE = 'budget_organization_code';
var ARCHIVED = 'archived';
var TRANSACTION_DATE = 'transaction_date';
var TRANSACTION_TYPE = 'transaction_type';
var COMMITMENTS = 'commitments';
var DISBURSEMENTS = 'disbursements';
var EXPENDITURES = 'expenditures';
var ESTIMATED_DISBURSEMENTS = 'estimated_disbursements';
var TRANSACTION_AMOUNT = 'transaction_amount';
var ADJUSTMENT_TYPE = 'adjustment_type';
var ACTUAL_START_DATE = 'actual_start_date';
var PROPOSED_START_DATE = 'proposed_start_date';
var ACTUAL_COMPLETION_DATE = 'actual_completion_date';
var CONTRACTING_DATE = 'contracting_date';
var DISBURSEMENT_DATE = 'disbursement_date';
var PROPOSED_APPROVAL_DATE = 'proposed_approval_date';
var ORIGINAL_COMPLETION_DATE = 'original_completion_date';
var PROPOSED_COMPLETION_DATE = 'proposed_completion_date';
var FINAL_DATE_FOR_DISBURSEMENTS = 'final_date_for_disbursements';
var FINAL_DATE_FOR_CONTRACTING = 'final_date_for_contracting';
var EFFECTIVE_FUNDING_DATE = 'effective_funding_date';
var FUNDING_CLOSING_DATE = 'funding_closing_date';
var RATIFICATION_DATE = 'ratification_date';
var MATURITY = 'maturity';
var LAST_AUDIT_DATE = 'last_audit_date';
var SIGNATURE_DATE = 'signature_date';
var HUMANITARIAN_AID = 'humanitarian_aid';
var DISASTER_RESPONSE = 'disaster_response';
var PROGRAM = 'program';
var PROGRAM_PERCENTAGE = 'program_percentage';
var PROGRAM_SETTINGS = 'program_settings';
var NATIONAL_PLAN_OBJECTIVE = 'national_plan_objective';
var PRIMARY_PROGRAMS = 'primary_programs';
var SECONDARY_PROGRAMS = 'secondary_programs';
var TERTIAR_PROGRAMS = 'tertiary_programs';
var GOVERNMENT_APPROVAL_PROCEDURES = 'government_approval_procedures';
var JOINT_CRITERIA = 'joint_criteria';
var TEAM = 'team';
var REJECTED_ID = 'rejectedId';
var INTERNAL_ID = 'internal_id';
var AMP_ID = 'amp_id';
var PROJECT_TITLE = 'project_title';
var DESCRIPTION = 'description';
var MODIFIED_BY = 'modified_by';
var MODIFIED_ON = 'update_date';
var CREATED_BY = 'created_by';
var CREATED_ON = 'creation_date';
var LAST_IMPORTED_BY = 'last_imported_by';
var CLIENT_CHANGE_ID = 'client-change-id';
var CLIENT_CREATED_ON = 'client-created-on';
var CLIENT_UPDATED_ON = 'client-updated-on';
var IS_PUSHED = 'is-pushed';
var ACTIVITY_GROUP = 'activity_group';
var VERSION = 'version';
var PROJECT_COMMENTS = 'project_comments';
var LESSONS_LEARNED = 'lessons_learned';
var PROJECT_IMPACT = 'project_impact';
var ACTIVITY_SUMMARY = 'activity_summary';
var CONDITIONALITIES = 'conditionalities';
var PROJECT_MANAGEMENT = 'project_management';
var A_C_CHAPTER = 'a_c_chapter';
var CRIS_NUMBER = 'cris_number';
var IATI_IDENTIFIER = 'iati_identifier';
var ACTIVITY_INTERNAL_IDS = 'activity_internal_ids';
var HIERARCHICAL_VALUE = 'hierarchical_value';
var HIERARCHICAL_VALUE_PARTS = 'hierarchical_value_parts';
var HIERARCHICAL_VALUE_DEPTH = 'hierarchical_value_depth';
var PPC_AMOUNT = 'ppc_amount';
var RPC_AMOUNT = 'rpc_amount';
var PPC_ANNUAL_BUDGETS = 'ppc_annual_budgets';
var AMOUNT = 'amount';
var CURRENCY = 'currency';
var FUNDING_DATE = 'funding_date';
var COMPONENTS = 'components';
var TOTAL_NUMBER_OF_FUNDING_SOURCES = 'total_number_of_funding_sources';
var SOURCE_ROLE = 'source_role';
var AMP_FUNDING_ID = 'funding_id';
var ISSUES = 'issues';
var ISSUE_DATE = 'issue_date';
var ISSUE_NAME = 'name';
var MEASURES = 'measures';
var MEASURE_NAME = 'name';
var MEASURE_DATE = 'measure_date';
var ACTORS = 'actors';
var ACTOR_NAME = 'name';
var STRUCTURES = 'structures';
var STRUCTURES_TITLE = 'title';
var STRUCTURES_DESCRIPTION = 'description';
var STRUCTURES_LATITUDE = 'latitude';
var STRUCTURES_LONGITUDE = 'longitude';
var STRUCTURES_COLOR = 'structure_color';
var STRUCTURES_LAT = 'lat';
var STRUCTURES_LNG = 'lng';
var STRUCTURES_SHAPE = 'shape';
var STRUCTURES_POINT = 'Point';
var STRUCTURES_POLYGON = 'Polygon';
var STRUCTURES_POLYLINE = 'Polyline';
var STRUCTURES_COORDINATES = 'coordinates';
var COMPONENT_TYPE = 'component_type';
var COMPONENT_TITLE = 'component_title';
var COMPONENT_FUNDING = 'funding';
var COMPONENT_DESCRIPTION = 'description';
var COMPONENT_ORGANIZATION = 'component_organization';
var FUNDING_AMOUNT_ID = 'amp_funding_amount_id';
var EXTRA_INFO = 'extra_info';
var VALUE = 'value';
var ACRONYM = 'acronym';
var TYPE_OF_COOPERATION = 'type_of_cooperation';
var ANNUAL_PROJECT_BUDGET_ID = 'annual_project_budget_id';
var TYPE = 'type';
var YEAR = 'year';
var GROUP_VERSIONED_FUNDING = 'group_versioned_funding';
var ACTIVE_LIST = 'active_list';
var ACTIVE = 'active';
var DELEGATED_COOPERATION = 'delegated_cooperation';
var DELEGATED_PARTNER = 'delegated_partner';
var FINANCING_ID = 'financing_id';
var DISBURSEMENT_ORDER_ID = 'disbursement_order_id';
var PLEDGE = 'pledge';
var CAPITAL_SPENDING_PERCENTAGE = 'capital_spending_percentage';
var REPORTING_DATE = 'reporting_date';
var RECIPIENT_ROLE = 'recipient_role';
var RECIPIENT_ORGANIZATION = 'recipient_organization';
var TEMPORAL_ID = '_temporal_id';
var MINISTRY_CODE = 'ministry_code';
var PROJECT_CODE = 'project_code';
var FY = 'fy';
var INDIRECT_ON_BUDGET = 'indirect_on_budget';
var IMPLEMENTATION_LEVELS_EXTRA_INFO = 'implementation-levels';
var IMPLEMENTATION_LOCATION_EXTRA_INFO = 'implementation_location_name';
var DONOR_CONTACT = 'donor_contact_information';
var PROJECT_COORDINATOR_CONTACT = 'project_coordinator_contact_information';
var SECTOR_MINISTRY_CONTACT = 'sector_ministry_contact_information';
var MOFED_CONTACT = 'mofed_contact_information';
var IMPLEMENTING_EXECUTING_AGENCY_CONTACT = 'implementing/executing_agency_contact_information';
var CONTACT = 'contact';
var ORGANIZATION_GROUP = 'organization_group';
var FIXED_EXCHANGE_RATE = 'fixed_exchange_rate';
var PRIMARY_CONTACT = 'mark_as_primary';
var ACTIVITY_DOCUMENTS = 'activity_documents';
var DOCUMENT_TYPE = 'document_type';
var ISO2 = 'iso2';
var MTEF_PROJECTIONS$1 = 'mtef_projections';
var PROJECTION = 'projection';
var PIPELINE = 'pipeline';
var PROJECTION_DATE = 'projection_date';

// Activity labels (usually those that don't come as part of Fields Def EP)
var SAME_AS_PROPOSED_START_DATE_LABEL = 'Same as Proposed Start Date';
var SAME_AS_PROPOSED_APPROVAL_DATE_LABEL = 'Same as Proposed Approval Date';

// Activity validation rules
var DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT = 'implementation_level_present';
var DEPENDENCY_IMPLEMENTATION_LEVEL_VALID = 'implementation_level_valid';
var DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT = 'implementation_location_present';
var DEPENDENCY_IMPLEMENTATION_LOCATION_VALID = 'implementation_location_valid';
var DEPENDENCY_PROJECT_CODE_ON_BUDGET = 'project_code_on_budget';
var DEPENDENCY_ON_BUDGET = 'on_budget';
var DEPENDENCY_TRANSACTION_PRESENT = 'transaction_present';
var DEPENDENCY_COMPONENT_FUNDING_ORG_VALID = 'organization_present';

/** IDs for AP sections **/
var AP_SECTION_IDS = [{ key: 'APIdentification', hash: '#APIdentification', value: 'Identification', fmPath: FeatureManagerConstants.ACTIVITY_IDENTIFICATION }, { key: 'APInternalIds', hash: '#APInternalIds', value: 'Agency Internal IDs', sectionPath: ACTIVITY_INTERNAL_IDS }, { key: 'APPlanning', hash: '#APPlanning', value: 'Planning', fmPath: FeatureManagerConstants.ACTIVITY_PLANNING }, { key: 'APLocation', hash: '#APLocation', value: 'Location', sectionPath: LOCATIONS }, { key: 'APProgram', hash: '#APProgram', value: 'Program', fmPath: FeatureManagerConstants.ACTIVITY_PROGRAM }, { key: 'APSector', hash: '#APSector', value: 'Sectors', fmPath: FeatureManagerConstants.ACTIVITY_SECTORS }, {
  key: 'APFundingSources',
  hash: '#APFundingSources',
  value: 'Funding Sources',
  sectionPath: TOTAL_NUMBER_OF_FUNDING_SOURCES
}, { key: 'APFunding', hash: '#APFunding', value: 'Funding', sectionPath: FUNDINGS }, {
  key: 'APRelatedOrganizations',
  hash: '#APRelatedOrganizations',
  value: 'Related Organizations',
  fmPath: FeatureManagerConstants.ACTIVITY_ORGANIZATIONS
}, { key: 'APIssues', hash: '#APIssues', value: 'Issues', sectionPath: ISSUES }, { key: 'APContact', hash: '#APContact', value: 'Contact Information', fmPath: FeatureManagerConstants.ACTIVITY_CONTACT }, { key: 'APStructures', hash: '#APStructures', value: 'Structures', sectionPath: STRUCTURES }, { key: 'APDocument', hash: '#APDocument', value: 'Related Documents', sectionPath: ACTIVITY_DOCUMENTS }];

/** Column counts for each section **/
var ACTIVITY_INTERNAL_IDS_COLS = 3;
var ACTIVITY_PLANNING_COLS = 2;
var ACTIVITY_LOCATION_COLS = 3;
var ACTIVITY_FUNDING_COLS = 2;
var ACTIVITY_CONTACT_COLS = 2;
var AP_FUNDINGS_TABLE_COLS = 4;

var MULTI_SELECT_MIN_SIZE = 8;
var MULTI_SELECT_MAX_SIZE = 8;

// TODO: move these functions to an Utils class.
var toFieldNames = function toFieldNames(listOfNames) {
  return listOfNames.map(function (name) {
    return toFieldName(name);
  });
};

/**
 * Converts the original non-translated label to internal field name
 * @param name
 * @return {string}
 */
var toFieldName = function toFieldName(name) {
  return name.toLowerCase().replace(' ', '_');
};

/**
 * Converts the internal field name to the Original non-translated label
 * @param fieldName
 * @return {string}
 */
var toOriginalLabel = function toOriginalLabel(fieldName) {
  return capitalize(fieldName.replace('_', ' '));
};

// TODO: move again inside a shared Utils class because this is a copy from Utils.js
var capitalize = function capitalize(text) {
  return text.replace(/(?:^|\s)\S/g, function (char) {
    return char.toUpperCase();
  });
};

var ActivityConstants = Object.freeze({
  ACTIVITY_BUDGET: ACTIVITY_BUDGET,
  ACTIVITY_STATUS: ACTIVITY_STATUS,
  STATUS_REASON: STATUS_REASON,
  FINANCIAL_INSTRUMENT: FINANCIAL_INSTRUMENT,
  TYPE_OF_IMPLEMENTATION: TYPE_OF_IMPLEMENTATION,
  OBJECTIVE: OBJECTIVE,
  RESULTS: RESULTS,
  BUDGET_CODE_PROJECT_ID: BUDGET_CODE_PROJECT_ID,
  ACTUAL_APPROVAL_DATE: ACTUAL_APPROVAL_DATE,
  FUNDINGS: FUNDINGS,
  FUNDING_DONOR_ORG_ID: FUNDING_DONOR_ORG_ID,
  IS_DRAFT: IS_DRAFT,
  ORG_ROLE_ORG_ID: ORG_ROLE_ORG_ID,
  ADDITIONAL_INFO: ADDITIONAL_INFO,
  PRIMARY_SECTORS: PRIMARY_SECTORS,
  SECONDARY_SECTORS: SECONDARY_SECTORS,
  TERTIARY_SECTORS: TERTIARY_SECTORS,
  TAG_SECTORS: TAG_SECTORS,
  SECTOR: SECTOR,
  SECTOR_PERCENTAGE: SECTOR_PERCENTAGE,
  FINANCING_INSTRUMENT: FINANCING_INSTRUMENT,
  MODALITIES: MODALITIES,
  LINE_MINISTRY_RANK: LINE_MINISTRY_RANK,
  GOVERNMENT_AGREEMENT_NUMBER: GOVERNMENT_AGREEMENT_NUMBER,
  FUNDING_STATUS: FUNDING_STATUS,
  LOCATIONS: LOCATIONS,
  LOCATION: LOCATION,
  LOCATION_PERCENTAGE: LOCATION_PERCENTAGE,
  IMPLEMENTATION_LOCATION: IMPLEMENTATION_LOCATION,
  IMPLEMENTATION_LEVEL: IMPLEMENTATION_LEVEL,
  APPROVAL_STATUS: APPROVAL_STATUS,
  APPROVED_BY: APPROVED_BY,
  APPROVAL_DATE: APPROVAL_DATE,
  TYPE_OF_ASSISTANCE: TYPE_OF_ASSISTANCE,
  EXPENDITURE_CLASS: EXPENDITURE_CLASS,
  FUNDING_DETAILS: FUNDING_DETAILS,
  MODE_OF_PAYMENT: MODE_OF_PAYMENT,
  FUNDING_CLASSIFICATION_DATE: FUNDING_CLASSIFICATION_DATE,
  AGREEMENT: AGREEMENT,
  DONOR_OBJECTIVE: DONOR_OBJECTIVE,
  CONDITIONS: CONDITIONS,
  AGREEMENT_CODE: AGREEMENT_CODE,
  AGREEMENT_TITLE: AGREEMENT_TITLE,
  PROJECT_CATEGORY: PROJECT_CATEGORY,
  PROJECT_IMPLEMENTING_UNIT: PROJECT_IMPLEMENTING_UNIT,
  ORGANIZATION: ORGANIZATION,
  PERCENTAGE: PERCENTAGE,
  AMP_ORGANIZATION_ROLE_ID: AMP_ORGANIZATION_ROLE_ID,
  ROLE: ROLE,
  EXECUTING_AGENCY: EXECUTING_AGENCY,
  CONTRACTING_AGENCY: CONTRACTING_AGENCY,
  BENEFICIARY_AGENCY: BENEFICIARY_AGENCY,
  IMPLEMENTING_AGENCY: IMPLEMENTING_AGENCY,
  RESPONSIBLE_ORGANIZATION: RESPONSIBLE_ORGANIZATION,
  DONOR_ORGANIZATION: DONOR_ORGANIZATION,
  REGIONAL_GROUP: REGIONAL_GROUP,
  SECTOR_GROUP: SECTOR_GROUP,
  BUDGETS: BUDGETS,
  BUDGET_CODE: BUDGET_CODE,
  BUDGET_ORGANIZATION_CODE: BUDGET_ORGANIZATION_CODE,
  ARCHIVED: ARCHIVED,
  TRANSACTION_DATE: TRANSACTION_DATE,
  TRANSACTION_TYPE: TRANSACTION_TYPE,
  COMMITMENTS: COMMITMENTS,
  DISBURSEMENTS: DISBURSEMENTS,
  EXPENDITURES: EXPENDITURES,
  ESTIMATED_DISBURSEMENTS: ESTIMATED_DISBURSEMENTS,
  TRANSACTION_AMOUNT: TRANSACTION_AMOUNT,
  ADJUSTMENT_TYPE: ADJUSTMENT_TYPE,
  ACTUAL_START_DATE: ACTUAL_START_DATE,
  PROPOSED_START_DATE: PROPOSED_START_DATE,
  ACTUAL_COMPLETION_DATE: ACTUAL_COMPLETION_DATE,
  CONTRACTING_DATE: CONTRACTING_DATE,
  DISBURSEMENT_DATE: DISBURSEMENT_DATE,
  PROPOSED_APPROVAL_DATE: PROPOSED_APPROVAL_DATE,
  ORIGINAL_COMPLETION_DATE: ORIGINAL_COMPLETION_DATE,
  PROPOSED_COMPLETION_DATE: PROPOSED_COMPLETION_DATE,
  FINAL_DATE_FOR_DISBURSEMENTS: FINAL_DATE_FOR_DISBURSEMENTS,
  FINAL_DATE_FOR_CONTRACTING: FINAL_DATE_FOR_CONTRACTING,
  EFFECTIVE_FUNDING_DATE: EFFECTIVE_FUNDING_DATE,
  FUNDING_CLOSING_DATE: FUNDING_CLOSING_DATE,
  RATIFICATION_DATE: RATIFICATION_DATE,
  MATURITY: MATURITY,
  LAST_AUDIT_DATE: LAST_AUDIT_DATE,
  SIGNATURE_DATE: SIGNATURE_DATE,
  HUMANITARIAN_AID: HUMANITARIAN_AID,
  DISASTER_RESPONSE: DISASTER_RESPONSE,
  PROGRAM: PROGRAM,
  PROGRAM_PERCENTAGE: PROGRAM_PERCENTAGE,
  PROGRAM_SETTINGS: PROGRAM_SETTINGS,
  NATIONAL_PLAN_OBJECTIVE: NATIONAL_PLAN_OBJECTIVE,
  PRIMARY_PROGRAMS: PRIMARY_PROGRAMS,
  SECONDARY_PROGRAMS: SECONDARY_PROGRAMS,
  TERTIAR_PROGRAMS: TERTIAR_PROGRAMS,
  GOVERNMENT_APPROVAL_PROCEDURES: GOVERNMENT_APPROVAL_PROCEDURES,
  JOINT_CRITERIA: JOINT_CRITERIA,
  TEAM: TEAM,
  REJECTED_ID: REJECTED_ID,
  INTERNAL_ID: INTERNAL_ID,
  AMP_ID: AMP_ID,
  PROJECT_TITLE: PROJECT_TITLE,
  DESCRIPTION: DESCRIPTION,
  MODIFIED_BY: MODIFIED_BY,
  MODIFIED_ON: MODIFIED_ON,
  CREATED_BY: CREATED_BY,
  CREATED_ON: CREATED_ON,
  LAST_IMPORTED_BY: LAST_IMPORTED_BY,
  CLIENT_CHANGE_ID: CLIENT_CHANGE_ID,
  CLIENT_CREATED_ON: CLIENT_CREATED_ON,
  CLIENT_UPDATED_ON: CLIENT_UPDATED_ON,
  IS_PUSHED: IS_PUSHED,
  ACTIVITY_GROUP: ACTIVITY_GROUP,
  VERSION: VERSION,
  PROJECT_COMMENTS: PROJECT_COMMENTS,
  LESSONS_LEARNED: LESSONS_LEARNED,
  PROJECT_IMPACT: PROJECT_IMPACT,
  ACTIVITY_SUMMARY: ACTIVITY_SUMMARY,
  CONDITIONALITIES: CONDITIONALITIES,
  PROJECT_MANAGEMENT: PROJECT_MANAGEMENT,
  A_C_CHAPTER: A_C_CHAPTER,
  CRIS_NUMBER: CRIS_NUMBER,
  IATI_IDENTIFIER: IATI_IDENTIFIER,
  ACTIVITY_INTERNAL_IDS: ACTIVITY_INTERNAL_IDS,
  HIERARCHICAL_VALUE: HIERARCHICAL_VALUE,
  HIERARCHICAL_VALUE_PARTS: HIERARCHICAL_VALUE_PARTS,
  HIERARCHICAL_VALUE_DEPTH: HIERARCHICAL_VALUE_DEPTH,
  PPC_AMOUNT: PPC_AMOUNT,
  RPC_AMOUNT: RPC_AMOUNT,
  PPC_ANNUAL_BUDGETS: PPC_ANNUAL_BUDGETS,
  AMOUNT: AMOUNT,
  CURRENCY: CURRENCY,
  FUNDING_DATE: FUNDING_DATE,
  COMPONENTS: COMPONENTS,
  TOTAL_NUMBER_OF_FUNDING_SOURCES: TOTAL_NUMBER_OF_FUNDING_SOURCES,
  SOURCE_ROLE: SOURCE_ROLE,
  AMP_FUNDING_ID: AMP_FUNDING_ID,
  ISSUES: ISSUES,
  ISSUE_DATE: ISSUE_DATE,
  ISSUE_NAME: ISSUE_NAME,
  MEASURES: MEASURES,
  MEASURE_NAME: MEASURE_NAME,
  MEASURE_DATE: MEASURE_DATE,
  ACTORS: ACTORS,
  ACTOR_NAME: ACTOR_NAME,
  STRUCTURES: STRUCTURES,
  STRUCTURES_TITLE: STRUCTURES_TITLE,
  STRUCTURES_DESCRIPTION: STRUCTURES_DESCRIPTION,
  STRUCTURES_LATITUDE: STRUCTURES_LATITUDE,
  STRUCTURES_LONGITUDE: STRUCTURES_LONGITUDE,
  STRUCTURES_COLOR: STRUCTURES_COLOR,
  STRUCTURES_LAT: STRUCTURES_LAT,
  STRUCTURES_LNG: STRUCTURES_LNG,
  STRUCTURES_SHAPE: STRUCTURES_SHAPE,
  STRUCTURES_POINT: STRUCTURES_POINT,
  STRUCTURES_POLYGON: STRUCTURES_POLYGON,
  STRUCTURES_POLYLINE: STRUCTURES_POLYLINE,
  STRUCTURES_COORDINATES: STRUCTURES_COORDINATES,
  COMPONENT_TYPE: COMPONENT_TYPE,
  COMPONENT_TITLE: COMPONENT_TITLE,
  COMPONENT_FUNDING: COMPONENT_FUNDING,
  COMPONENT_DESCRIPTION: COMPONENT_DESCRIPTION,
  COMPONENT_ORGANIZATION: COMPONENT_ORGANIZATION,
  FUNDING_AMOUNT_ID: FUNDING_AMOUNT_ID,
  EXTRA_INFO: EXTRA_INFO,
  VALUE: VALUE,
  ACRONYM: ACRONYM,
  TYPE_OF_COOPERATION: TYPE_OF_COOPERATION,
  ANNUAL_PROJECT_BUDGET_ID: ANNUAL_PROJECT_BUDGET_ID,
  TYPE: TYPE,
  YEAR: YEAR,
  GROUP_VERSIONED_FUNDING: GROUP_VERSIONED_FUNDING,
  ACTIVE_LIST: ACTIVE_LIST,
  ACTIVE: ACTIVE,
  DELEGATED_COOPERATION: DELEGATED_COOPERATION,
  DELEGATED_PARTNER: DELEGATED_PARTNER,
  FINANCING_ID: FINANCING_ID,
  DISBURSEMENT_ORDER_ID: DISBURSEMENT_ORDER_ID,
  PLEDGE: PLEDGE,
  CAPITAL_SPENDING_PERCENTAGE: CAPITAL_SPENDING_PERCENTAGE,
  REPORTING_DATE: REPORTING_DATE,
  RECIPIENT_ROLE: RECIPIENT_ROLE,
  RECIPIENT_ORGANIZATION: RECIPIENT_ORGANIZATION,
  TEMPORAL_ID: TEMPORAL_ID,
  MINISTRY_CODE: MINISTRY_CODE,
  PROJECT_CODE: PROJECT_CODE,
  FY: FY,
  INDIRECT_ON_BUDGET: INDIRECT_ON_BUDGET,
  IMPLEMENTATION_LEVELS_EXTRA_INFO: IMPLEMENTATION_LEVELS_EXTRA_INFO,
  IMPLEMENTATION_LOCATION_EXTRA_INFO: IMPLEMENTATION_LOCATION_EXTRA_INFO,
  DONOR_CONTACT: DONOR_CONTACT,
  PROJECT_COORDINATOR_CONTACT: PROJECT_COORDINATOR_CONTACT,
  SECTOR_MINISTRY_CONTACT: SECTOR_MINISTRY_CONTACT,
  MOFED_CONTACT: MOFED_CONTACT,
  IMPLEMENTING_EXECUTING_AGENCY_CONTACT: IMPLEMENTING_EXECUTING_AGENCY_CONTACT,
  CONTACT: CONTACT,
  ORGANIZATION_GROUP: ORGANIZATION_GROUP,
  FIXED_EXCHANGE_RATE: FIXED_EXCHANGE_RATE,
  PRIMARY_CONTACT: PRIMARY_CONTACT,
  ACTIVITY_DOCUMENTS: ACTIVITY_DOCUMENTS,
  DOCUMENT_TYPE: DOCUMENT_TYPE,
  ISO2: ISO2,
  MTEF_PROJECTIONS: MTEF_PROJECTIONS$1,
  PROJECTION: PROJECTION,
  PIPELINE: PIPELINE,
  PROJECTION_DATE: PROJECTION_DATE,
  SAME_AS_PROPOSED_START_DATE_LABEL: SAME_AS_PROPOSED_START_DATE_LABEL,
  SAME_AS_PROPOSED_APPROVAL_DATE_LABEL: SAME_AS_PROPOSED_APPROVAL_DATE_LABEL,
  DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT: DEPENDENCY_IMPLEMENTATION_LEVEL_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LEVEL_VALID: DEPENDENCY_IMPLEMENTATION_LEVEL_VALID,
  DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT: DEPENDENCY_IMPLEMENTATION_LOCATION_PRESENT,
  DEPENDENCY_IMPLEMENTATION_LOCATION_VALID: DEPENDENCY_IMPLEMENTATION_LOCATION_VALID,
  DEPENDENCY_PROJECT_CODE_ON_BUDGET: DEPENDENCY_PROJECT_CODE_ON_BUDGET,
  DEPENDENCY_ON_BUDGET: DEPENDENCY_ON_BUDGET,
  DEPENDENCY_TRANSACTION_PRESENT: DEPENDENCY_TRANSACTION_PRESENT,
  DEPENDENCY_COMPONENT_FUNDING_ORG_VALID: DEPENDENCY_COMPONENT_FUNDING_ORG_VALID,
  AP_SECTION_IDS: AP_SECTION_IDS,
  ACTIVITY_INTERNAL_IDS_COLS: ACTIVITY_INTERNAL_IDS_COLS,
  ACTIVITY_PLANNING_COLS: ACTIVITY_PLANNING_COLS,
  ACTIVITY_LOCATION_COLS: ACTIVITY_LOCATION_COLS,
  ACTIVITY_FUNDING_COLS: ACTIVITY_FUNDING_COLS,
  ACTIVITY_CONTACT_COLS: ACTIVITY_CONTACT_COLS,
  AP_FUNDINGS_TABLE_COLS: AP_FUNDINGS_TABLE_COLS,
  MULTI_SELECT_MIN_SIZE: MULTI_SELECT_MIN_SIZE,
  MULTI_SELECT_MAX_SIZE: MULTI_SELECT_MAX_SIZE,
  toFieldNames: toFieldNames,
  toFieldName: toFieldName,
  toOriginalLabel: toOriginalLabel,
  capitalize: capitalize
});

var NOTIFICATION_ORIGIN_API_SECURITY = 'NOTIFICATION_ORIGIN_API_SECURITY';
var NOTIFICATION_ORIGIN_API_NETWORK = 'NOTIFICATION_ORIGIN_API_NETWORK';
var NOTIFICATION_ORIGIN_API_SYNCUP = 'NOTIFICATION_ORIGIN_API_SYNCUP';
var NOTIFICATION_ORIGIN_API_GENERAL = 'NOTIFICATION_ORIGIN_API_GENERAL';
var NOTIFICATION_ORIGIN_DATABASE = 'NOTIFICATION_ORIGIN_DATABASE';
var NOTIFICATION_ORIGIN_AUTHENTICATION = 'NOTIFICATION_ORIGIN_AUTHENTICATION';
var NOTIFICATION_ORIGIN_WORKSPACE_FILTER = 'NOTIFICATION_ORIGIN_WORKSPACE_FILTER';
var NOTIFICATION_ORIGIN_WORKSPACE = 'NOTIFICATION_ORIGIN_WORKSPACE';
var NOTIFICATION_ORIGIN_SYNCUP_PROCESS = 'NOTIFICATION_ORIGIN_SYNCUP_PROCESS';
var NOTIFICATION_ORIGIN_CURRENCY_MANAGER = 'NOTIFICATION_ORIGIN_CURRENCY_MANAGER';
var NOTIFICATION_ORIGIN_DATES = 'NOTIFICATION_ORIGIN_DATES';
var NOTIFICATION_ORIGIN_ACTIVITY = 'NOTIFICATION_ORIGIN_ACTIVITY';
var NOTIFICATION_ORIGIN_RESOURCE = 'NOTIFICATION_ORIGIN_RESOURCE';
var NOTIFICATION_ORIGIN_I18NEXT = 'NOTIFICATION_ORIGIN_I18NEXT';
var NOTIFICATION_ORIGIN_UPDATE_CHECK = 'NOTIFICATION_ORIGIN_UPDATE_CHECK';
var NOTIFICATION_ORIGIN_UPDATE = 'NOTIFICATION_ORIGIN_UPDATE';
var NOTIFICATION_ORIGIN_SETUP = 'NOTIFICATION_ORIGIN_SETUP';
var NOTIFICATION_ORIGIN_SETTINGS = 'NOTIFICATION_ORIGIN_SETTINGS';

var NOTIFICATION_SEVERITY_WARNING = 'NOTIFICATION_SEVERITY_WARNING';
var NOTIFICATION_SEVERITY_INFO = 'NOTIFICATION_SEVERITY_INFO';
var NOTIFICATION_SEVERITY_ERROR = 'NOTIFICATION_SEVERITY_ERROR';

var NOTIFICATION_ERROR_LEVEL_MINOR = 'NOTIFICATION_ERROR_LEVEL_MINOR';
var NOTIFICATION_ERROR_LEVEL_BLOCKER = 'NOTIFICATION_ERROR_LEVEL_BLOCKER';

var NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE = 'NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE';

var ERROR_CODE_NO_CONNECTIVITY = 'NO_CONNECTIVITY';
var ERROR_CODE_ACCESS_DENIED = 'ACCESS_DENIED';

var MSG_INVALID_URL = 'invalidUrl';
var MSG_TIMEOUT = 'timeoutError';
var MSG_UNKNOWN_NETWORK_ERROR = 'unknownNetworkError';
var MSG_AMP_UNREACHABLE = 'AMPUnreachableError';
var GENERAL_CONNECTION_ERRORS = [MSG_INVALID_URL, MSG_TIMEOUT, MSG_UNKNOWN_NETWORK_ERROR, MSG_AMP_UNREACHABLE];

var ErrorConstants = Object.freeze({
  NOTIFICATION_ORIGIN_API_SECURITY: NOTIFICATION_ORIGIN_API_SECURITY,
  NOTIFICATION_ORIGIN_API_NETWORK: NOTIFICATION_ORIGIN_API_NETWORK,
  NOTIFICATION_ORIGIN_API_SYNCUP: NOTIFICATION_ORIGIN_API_SYNCUP,
  NOTIFICATION_ORIGIN_API_GENERAL: NOTIFICATION_ORIGIN_API_GENERAL,
  NOTIFICATION_ORIGIN_DATABASE: NOTIFICATION_ORIGIN_DATABASE,
  NOTIFICATION_ORIGIN_AUTHENTICATION: NOTIFICATION_ORIGIN_AUTHENTICATION,
  NOTIFICATION_ORIGIN_WORKSPACE_FILTER: NOTIFICATION_ORIGIN_WORKSPACE_FILTER,
  NOTIFICATION_ORIGIN_WORKSPACE: NOTIFICATION_ORIGIN_WORKSPACE,
  NOTIFICATION_ORIGIN_SYNCUP_PROCESS: NOTIFICATION_ORIGIN_SYNCUP_PROCESS,
  NOTIFICATION_ORIGIN_CURRENCY_MANAGER: NOTIFICATION_ORIGIN_CURRENCY_MANAGER,
  NOTIFICATION_ORIGIN_DATES: NOTIFICATION_ORIGIN_DATES,
  NOTIFICATION_ORIGIN_ACTIVITY: NOTIFICATION_ORIGIN_ACTIVITY,
  NOTIFICATION_ORIGIN_RESOURCE: NOTIFICATION_ORIGIN_RESOURCE,
  NOTIFICATION_ORIGIN_I18NEXT: NOTIFICATION_ORIGIN_I18NEXT,
  NOTIFICATION_ORIGIN_UPDATE_CHECK: NOTIFICATION_ORIGIN_UPDATE_CHECK,
  NOTIFICATION_ORIGIN_UPDATE: NOTIFICATION_ORIGIN_UPDATE,
  NOTIFICATION_ORIGIN_SETUP: NOTIFICATION_ORIGIN_SETUP,
  NOTIFICATION_ORIGIN_SETTINGS: NOTIFICATION_ORIGIN_SETTINGS,

  NOTIFICATION_SEVERITY_WARNING: NOTIFICATION_SEVERITY_WARNING,
  NOTIFICATION_SEVERITY_INFO: NOTIFICATION_SEVERITY_INFO,
  NOTIFICATION_SEVERITY_ERROR: NOTIFICATION_SEVERITY_ERROR,

  NOTIFICATION_ERROR_LEVEL_MINOR: NOTIFICATION_ERROR_LEVEL_MINOR,
  NOTIFICATION_ERROR_LEVEL_BLOCKER: NOTIFICATION_ERROR_LEVEL_BLOCKER,

  NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE: NOTIFICATION_ORIGIN_WRONG_METHOD_USAGE,

  ERROR_CODE_NO_CONNECTIVITY: ERROR_CODE_NO_CONNECTIVITY,
  ERROR_CODE_ACCESS_DENIED: ERROR_CODE_ACCESS_DENIED,

  MSG_INVALID_URL: MSG_INVALID_URL,
  MSG_TIMEOUT: MSG_TIMEOUT,
  MSG_UNKNOWN_NETWORK_ERROR: MSG_UNKNOWN_NETWORK_ERROR,
  MSG_AMP_UNREACHABLE: MSG_AMP_UNREACHABLE,
  GENERAL_CONNECTION_ERRORS: GENERAL_CONNECTION_ERRORS
});

/* eslint-disable class-methods-use-this */

var CurrencyRatesManager = function () {
  function CurrencyRatesManager(currencyRates, baseCurrency, translate, dateUtils, errorNotificationHelper) {
    classCallCheck(this, CurrencyRatesManager);

    this._currencyRates = currencyRates;
    this._baseCurrency = baseCurrency;
    this._currnciesWithExchangeRates = this._getCurrenciesWithExchangeRates();
    this._translate = translate;
    this._dateUtils = dateUtils;
    this._errorNotificationHelper = errorNotificationHelper;
  }

  /**
   * Set of currencies that has at least one exchange rate
   * @return {Set<any> | *}
   */


  createClass(CurrencyRatesManager, [{
    key: 'convertCurrency',


    /**
     * Currency conversion utility. If we have the direct rate it will convert from currencyFrom to currencyTo in the
     * given date. If we don't have the said currency it will try to search the inverse rate and use 1/x. If the inverse
     * rate is also not Available an error will be thrown
     * @param currencyFrom currency code from the currency we are converting from
     * @param currencyTo currency code from the currency we are converting to
     * @param dateToFind date for which we are doing the conversion. It is expected in yyyy-mm-dd
     * @returns {*|Promise.<TResult>}
     */
    value: function convertCurrency(currencyFrom, currencyTo, dateToFind, fixedExchangeRate) {
      if (currencyFrom === currencyTo) {
        return Constants.RATE_SAME_CURRENCY;
      }
      if (fixedExchangeRate && fixedExchangeRate > 0) {
        return this.convertCurrency(this._baseCurrency, currencyTo, dateToFind, null) / fixedExchangeRate;
      }
      var timeDateToFind = new Date(dateToFind + ' ' + Constants.CURRENCY_HOUR).getTime();
      if (this._currencyRates) {
        var currenciesToSearchDirect = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === currencyFrom && item[Constants.CURRENCY_PAIR].to === currencyTo;
        });
        if (currenciesToSearchDirect) {
          return this.getExchangeRate(currenciesToSearchDirect, timeDateToFind);
        } else {
          // direct not found
          var currenciesToSearchInverse = this._currencyRates.find(function (item) {
            return item[Constants.CURRENCY_PAIR].from === currencyTo && item[Constants.CURRENCY_PAIR].to === currencyFrom;
          });
          if (currenciesToSearchInverse) {
            return 1 / this.getExchangeRate(currenciesToSearchInverse, timeDateToFind);
          } else {
            return this.convertViaBaseCurrency(currencyFrom, currencyTo, timeDateToFind);
          }
        }
      } else {
        throw this._getCurrencyError('CurrencyRatesNotInitialized');
      }
    }
  }, {
    key: 'convertFundingDetailsToCurrency',
    value: function convertFundingDetailsToCurrency(fundingDetails, currencyTo) {
      var _this = this;

      var total = 0;
      fundingDetails.forEach(function (fd) {
        total += _this.convertTransactionAmountToCurrency(fd, currencyTo);
      });

      return total;
    }
  }, {
    key: 'convertTransactionAmountToBaseCurrency',
    value: function convertTransactionAmountToBaseCurrency(fundingDetail) {
      return this.convertTransactionAmountToCurrency(fundingDetail, this._baseCurrency);
    }
  }, {
    key: 'convertAmountToCurrency',
    value: function convertAmountToCurrency(amount, currencyFrom, date, fixedExchangeRate, currencyTo) {
      var currencyRate = this.convertCurrency(currencyFrom, currencyTo, this._dateUtils.formatDateForAPI(date), fixedExchangeRate);
      return amount * currencyRate;
    }
  }, {
    key: 'convertTransactionAmountToCurrency',
    value: function convertTransactionAmountToCurrency(fundingDetail, currencyTo) {
      var fixedExchangeRate = fundingDetail[ActivityConstants.FIXED_EXCHANGE_RATE];
      var currencyFrom = fundingDetail[ActivityConstants.CURRENCY].value;
      var transactionDate = fundingDetail[ActivityConstants.TRANSACTION_DATE];
      var transactionAmount = fundingDetail[ActivityConstants.TRANSACTION_AMOUNT];
      return this.convertAmountToCurrency(transactionAmount, currencyFrom, transactionDate, fixedExchangeRate, currencyTo);
    }
  }, {
    key: 'getExchangeRate',
    value: function getExchangeRate(currenciesToSearch, timeDateToFind) {
      var lowerEnd = 0;
      var higherEnd = currenciesToSearch.rates.length - 1;
      while (lowerEnd < higherEnd) {
        var middle = Math.floor((lowerEnd + higherEnd) / 2);
        var difference = Math.abs(new Date(currenciesToSearch.rates[middle].date + '  ' + Constants.CURRENCY_HOUR) - timeDateToFind);
        var difference1 = Math.abs(new Date(currenciesToSearch.rates[middle + 1].date + '  ' + Constants.CURRENCY_HOUR) - timeDateToFind);
        if (difference1 <= difference) {
          lowerEnd = middle + 1;
        } else {
          higherEnd = middle;
        }
      }
      return currenciesToSearch.rates[higherEnd].rate;
    }
  }, {
    key: '_getCurrencyError',
    value: function _getCurrencyError(errorMesage) {
      var notifErrorCurrency = this._errorNotificationHelper.createNotification({
        message: this._translate(errorMesage),
        origin: ErrorConstants.NOTIFICATION_ORIGIN_CURRENCY_MANAGER
      });
      return notifErrorCurrency;
    }
  }, {
    key: 'convertViaBaseCurrency',
    value: function convertViaBaseCurrency(currencyFrom, currencyTo, timeDateToFind) {
      var _this2 = this;

      var rateFromToBase = this._currencyRates.find(function (item) {
        return item[Constants.CURRENCY_PAIR].from === currencyFrom && item[Constants.CURRENCY_PAIR].to === _this2._baseCurrency;
      });
      var rateBaseToTo = this._currencyRates.find(function (item) {
        return item[Constants.CURRENCY_PAIR].from === _this2._baseCurrency && item[Constants.CURRENCY_PAIR].to === currencyTo;
      });
      if (rateFromToBase && rateBaseToTo) {
        // if we have both currencies we just return the product of ech rate
        return this.getExchangeRate(rateFromToBase, timeDateToFind) * this.getExchangeRate(rateBaseToTo, timeDateToFind);
      } else if (rateFromToBase) {
        // if either of them is not found we try to find the inverse
        // we get the inverse of rateBaseToTo
        var rateToToBase = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === currencyTo && item[Constants.CURRENCY_PAIR].to === _this2._baseCurrency;
        });
        if (rateToToBase) {
          return this.getExchangeRate(rateFromToBase, timeDateToFind) * (1 / this.getExchangeRate(rateToToBase, timeDateToFind));
        } else {
          return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
        }
      } else if (rateBaseToTo) {
        var rateBaseToFrom = this._currencyRates.find(function (item) {
          return item[Constants.CURRENCY_PAIR].from === _this2._baseCurrency && item[Constants.CURRENCY_PAIR].to === currencyFrom;
        });
        // we try to get the inverse of rateFromToBase
        if (rateBaseToFrom) {
          return 1 / this.getExchangeRate(rateBaseToFrom, timeDateToFind) * this.getExchangeRate(rateBaseToTo, timeDateToFind);
        } else {
          return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
        }
      } else {
        return ErrorConstants.RATE_CURRENCY_NOT_FOUND;
      }
    }
  }, {
    key: '_getCurrenciesWithExchangeRates',
    value: function _getCurrenciesWithExchangeRates() {
      var cs = new Set();
      if (this._currencyRates) {
        this._currencyRates.forEach(function (exchangeRates) {
          cs.add(exchangeRates[Constants.CURRENCY_PAIR].from);
          cs.add(exchangeRates[Constants.CURRENCY_PAIR].to);
        });
      }
      return cs;
    }
  }, {
    key: 'currenciesWithExchangeRates',
    get: function get$$1() {
      return this._currnciesWithExchangeRates;
    }
  }]);
  return CurrencyRatesManager;
}();

/* eslint-disable class-methods-use-this */
// import Logger from './LoggerManager';

// const logger = new Logger('Feature manager');
var FEATURE_MANAGER = 'Feature manager';

/**
 * Feature Manager
 * @author Nadejda Mandrescu
 */

var FeatureManager = function () {
  function FeatureManager(fmTree, LoggerManager) {
    classCallCheck(this, FeatureManager);

    this._fmTree = fmTree;
    this._loggerManager = new LoggerManager(FEATURE_MANAGER);
  }

  createClass(FeatureManager, [{
    key: 'isFMSettingEnabled',
    value: function isFMSettingEnabled(fmPath, onlyLastSegment) {
      this._loggerManager.debug('isFMSettingEnabled');
      if (this._fmTree) {
        var lastFMSubTree = this._fmTree;
        var segments = this._getPathSegments(fmPath);
        var foundLastFMSubTree = segments.every(function (segment) {
          lastFMSubTree = lastFMSubTree[segment];
          return lastFMSubTree !== undefined && (lastFMSubTree.__enabled || onlyLastSegment);
        });
        return foundLastFMSubTree && lastFMSubTree.__enabled;
      }
      return false;
    }
  }, {
    key: 'hasFMSetting',
    value: function hasFMSetting(fmPath) {
      var fmSetting = this.findFMSetting(fmPath);
      return fmSetting && fmSetting.__enabled !== undefined;
    }
  }, {
    key: 'findFMSetting',
    value: function findFMSetting(fmPath) {
      var segments = this._getPathSegments(fmPath);
      return segments.reduce(function (currentFMSetting, segment) {
        return currentFMSetting && currentFMSetting[segment];
      }, this._fmTree || {});
    }
  }, {
    key: 'setFMSetting',
    value: function setFMSetting(fmPath, enabled) {
      if (this._fmTree) {
        var segments = this._getPathSegments(fmPath);
        var lastFMSubTree = segments.reduce(function (currentFMTree, segment) {
          var segmentFM = currentFMTree[segment];
          if (segmentFM === undefined) {
            segmentFM = {};
            currentFMTree[segment] = segmentFM;
          }
          return segmentFM;
        }, this._fmTree);
        lastFMSubTree.__enabled = enabled;
      }
    }
  }, {
    key: '_getPathSegments',
    value: function _getPathSegments(fmPath) {
      // ignore first "/" to exclude empty string from the split
      return fmPath.substring(1).split('/');
    }
  }, {
    key: 'fmTree',
    set: function set$$1(fmTree) {
      this._fmTree = fmTree;
    }
  }, {
    key: 'loggerManager',
    set: function set$$1(LoggerManager) {
      this._loggerManager = new LoggerManager(FEATURE_MANAGER);
    }
  }], [{
    key: 'setLoggerManager',
    value: function setLoggerManager(LoggerManager) {
      FeatureManager._currentFM._loggerManager = new LoggerManager(FEATURE_MANAGER);
    }
  }, {
    key: 'setFMTree',
    value: function setFMTree(fmTree) {
      FeatureManager._currentFM.fmTree = fmTree;
    }

    /**
     * Checks if the given FM path is fully enabled or only last segment is enabled
     * @param fmPath the FM path, e.g. '/PROJECT MANAGEMENT/Funding/Funding Information/Delivery rate'
     * @param onlyLastSegment specifies if to check if only the last segment is enabled (the AMP behavior for some cases)
     * @return {boolean}
     */

  }, {
    key: 'isFMSettingEnabled',
    value: function isFMSettingEnabled(fmPath, onlyLastSegment) {
      return FeatureManager._currentFM.isFMSettingEnabled(fmPath, onlyLastSegment);
    }
  }, {
    key: 'hasFMSetting',
    value: function hasFMSetting(fmPath) {
      return FeatureManager._currentFM.hasFMSetting(fmPath);
    }
  }]);
  return FeatureManager;
}();

FeatureManager._currentFM = new FeatureManager();

var index = {
  TestAPField: TestAPField,
  TestingSection: TestingSection,
  Constants: Constants,
  ActivityConstants: ActivityConstants,
  FeatureManagerConstants: FeatureManagerConstants,
  ErrorConstants: ErrorConstants,
  CurrencyRatesManager: CurrencyRatesManager,
  FeatureManager: FeatureManager
};

export default index;
export { TestAPField, TestingSection, Constants, ActivityConstants, FeatureManagerConstants, ErrorConstants, CurrencyRatesManager, FeatureManager };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdEFQRmllbGQuanMiLCIuLi9zcmMvYWN0aXZpdHlQcmV2aWV3L2NvbXBvbmVudHMvVGVzdGluZ1NlY3Rpb24uanMiLCIuLi9zcmMvdXRpbHMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9GZWF0dXJlTWFuYWdlckNvbnN0YW50cy5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvQWN0aXZpdHlDb25zdGFudHMuanMiLCIuLi9zcmMvdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzLmpzIiwiLi4vc3JjL21vZHVsZXMvdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlci5qcyIsIi4uL3NyYy9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXIuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9hY3Rpdml0eUFzc2V0cy9zdHlsZXNoZWV0cy9BY3Rpdml0eVByZXZpZXcuY3NzJztcblxuXG4vKipcbiAqIFNpbXBsZSBGaWVsZCBjb21wb25lbnQgdGhhdCBjb25zaXN0cyBvZiBhIGZpZWxkIHRpdGxlIGFuZCBmaWVsZCB2YWx1ZVxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0QVBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBHZXRzIGFuIGluc3RhbmNlIG9mIFNpbXBsZSBGaWVsZFxuICAgKiBAcGFyYW0gdHJuTGFiZWwgdGhlIGxhYmVsIHRvIHRyYW5zbGF0ZSBhbmQgdXNlIGFzIGEgdGl0bGUuIFRoaXMgbGFiZWwgaXMgYWxzbyB1c2VkIGFzIHRoZSBjb21wb25lbnQga2V5LlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIGZpZWxkIHZhbHVlXG4gICAqIEBwYXJhbSBpbmxpbmUgc2hvdyB0aXRsZSBhbmQgdmFsdWUgaW4gdGhlIHNhbWUgcm93LlxuICAgKiBAcGFyYW0gc2VwYXJhdG9yIGFkZCBvciBub3QgYW4gPGhyPiB0YWcuXG4gICAqIEBwYXJhbSBuYW1lQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgbGFiZWxcbiAgICogQHBhcmFtIHZhbHVlQ2xhc3MgY3NzIGNsYXNzIGZvciB0aGUgZmllbGQgdmFsdWVcbiAgICogQHJldHVybiB7U2ltcGxlRmllbGR9XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2UodHJuTGFiZWwsIHZhbHVlLCBpbmxpbmUgPSBmYWxzZSwgc2VwYXJhdG9yID0gZmFsc2UsIG5hbWVDbGFzcywgdmFsdWVDbGFzcykge1xuICAgIHJldHVybiAoPFRlc3RBUEZpZWxkXG4gICAgICBrZXk9e3RybkxhYmVsfSB0aXRsZT17dGhpcy5wcm9wcy50cmFuc2xhdGUodHJuTGFiZWwpfSB2YWx1ZT17dmFsdWV9IGlubGluZT17aW5saW5lfSBzZXBhcmF0b3I9e3NlcGFyYXRvcn1cbiAgICAgIGZpZWxkTmFtZUNsYXNzPXtuYW1lQ2xhc3N9IGZpZWxkVmFsdWVDbGFzcz17dmFsdWVDbGFzc30gLz4pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5hbXBMb2dnZXIubG9nKCdjb25zdHJ1Y3RvcmUnKTtcbiAgICB0aGlzLnVzZVNlcGFyYXRvciA9IHRoaXMucHJvcHMuc2VwYXJhdG9yICE9PSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlDbGFzcyA9IHRoaXMucHJvcHMuZmllbGRDbGFzcyB8fCAodGhpcy5wcm9wcy5pbmxpbmUgPT09IHRydWUgPyBzdHlsZXMuaW5saW5lIDogc3R5bGVzLmJsb2NrKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZFZhbHVlQ2xhc3N9ICR7dGhpcy5kaXNwbGF5Q2xhc3N9YDtcbiAgICAvLyBUbyBoYW5kbGUgYm9vbGVhbiBmaWVsZHMgd2UgZG9udCB3YW50IHRvIHNob3cgJ2ZhbHNlJyBhcyAnTm8gRGF0YScuXG4gICAgY29uc3QgdmFsdWUgPSAodGhpcy5wcm9wcy52YWx1ZSB8fCB0aGlzLnByb3BzLnZhbHVlID09PSBmYWxzZSkgPyB0aGlzLnByb3BzLnZhbHVlIDogdGhpcy5wcm9wcy50cmFuc2xhdGUoJ05vIERhdGEnKTtcbiAgICBsZXQgZGlzcGxheVZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlWzBdIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKHYgPT4gZGlzcGxheVZhbHVlLnB1c2godikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUuc29ydCgpLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZGlzcGxheVZhbHVlID0gdmFsdWUgPT09IHRydWUgPyB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnWWVzJykgOiB0aGlzLnByb3BzLnRyYW5zbGF0ZSgnTm8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheVZhbHVlID0gKHRoaXMucHJvcHMuaW5saW5lICYmIHRoaXMucHJvcHMudmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpID8gYCR7dmFsdWV9IGAgOiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudXNlSW5uZXJIVE1MKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGlzcGxheVZhbHVlIH19IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PntkaXNwbGF5VmFsdWV9PC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gYCR7dGhpcy5wcm9wcy5maWVsZE5hbWVDbGFzc30gJHt0aGlzLmRpc3BsYXlDbGFzc31gO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3RoaXMuZGlzcGxheUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIHt0aGlzLl9nZXRWYWx1ZSgpfVxuICAgICAge3RoaXMudXNlU2VwYXJhdG9yID8gPGhyIC8+IDogJyd9XG4gICAgPC9kaXY+KTtcbiAgfVxufVxuXG5UZXN0QVBGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlSW5uZXJIVE1MOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmllbGRDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGROYW1lQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpZWxkVmFsdWVDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgYW1wTG9nZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRlc3RBUEZpZWxkIGZyb20gJy4vVGVzdEFQRmllbGQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0aW5nU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnRlc3RpbmcgY29tcG9uZW50PC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB0ZXN0IHRyYW5zbGF0aW9uOiBgREVTS1RPUCA9IHt0aGlzLnByb3BzLnRyYW5zbGF0ZSgnREVTS1RPUCcpfWBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgdGVzdCBBUEZpZWxkOlxuICAgICAgICAgIDxUZXN0QVBGaWVsZCBhbXBMb2dnZXI9e3RoaXMucHJvcHMuYW1wTG9nZ2VyfSB0cmFuc2xhdGU9e3RoaXMucHJvcHMudHJhbnNsYXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblRlc3RpbmdTZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgYW1wTG9nZ2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbiIsIlxuY29uc3QgQkFTRV9SRVNUX1VSTCA9ICcvcmVzdCc7XG5cblxuY29uc3QgQ09OTkVDVElPTl9USU1FT1VUID0gMjUwMDA7XG5jb25zdCBDT05ORUNUSU9OX0ZPUkNFRF9USU1FT1VUID0gQ09OTkVDVElPTl9USU1FT1VUICsgNTAwMDtcbmNvbnN0IFRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwgPSA1MDAwO1xuY29uc3QgTUFYX1JFVFJZX0FURU1QVFMgPSA1O1xuY29uc3QgRVJST1JTX1RPX1JFVFJZID0gWydFU09DS0VUVElNRURPVVQnLCAnRVRJTUVET1VUJywgJ0VDT05OUkVTRVQnLCAnRUFJX0FHQUlOJ107XG5jb25zdCBFUlJPUlNfTk9fQU1QX1NFUlZFUiA9IFsnRUNPTk5SRUZVU0VEJywgJ0VORVRVTlJFQUNIJywgJ0VOT0VOVCcsICdFTk9URk9VTkQnLCAnRU5FVERPV04nLCAnRUhPU1RET1dOJyxcbiAgJ0VIT1NUVU5SRUFDSCcsICdFTk9ORVQnXTtcbmNvbnN0IENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCA9ICc2MDAwMCc7IC8vIDEgbWludXRlc1xuXG5jb25zdCBXT1JLU1BBQ0VfVVJMID0gJy93b3Jrc3BhY2UnO1xuY29uc3QgTE9HSU5fVVJMID0gJy8nO1xuY29uc3QgREVTS1RPUF9VUkwgPSAnL2Rlc2t0b3AnO1xuY29uc3QgREVTS1RPUF9DVVJSRU5UX1VSTCA9ICcvZGVza3RvcC9jdXJyZW50JztcbmNvbnN0IFNZTkNVUF9SRURJUkVDVF9VUkwgPSAnL3N5bmNVcC9zeW5jJztcbmNvbnN0IFNZTkNVUF9ISVNUT1JZX1RBUkdFVCA9ICdoaXN0b3J5JztcbmNvbnN0IFNZTkNVUF9TVU1NQVJZX1VSTCA9ICcvc3luY1VwU3VtbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9QUkVWSUVXX1VSTCA9ICcvYWN0aXZpdHkvcHJldmlldyc7XG5jb25zdCBBQ1RJVklUWV9FRElUX1VSTCA9ICcvYWN0aXZpdHkvZWRpdCc7XG5jb25zdCBVUERBVEVfVVJMID0gJy91cGRhdGUnO1xuY29uc3QgU0VUVVBfVVJMID0gJy9zZXR1cCc7XG5jb25zdCBTRVRUSU5HU19VUkwgPSAnL3NldHRpbmdzJztcblxuY29uc3QgQ09MTEVDVElPTl9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBDT0xMRUNUSU9OX1dPUktQQUNFUyA9ICd3b3Jrc3BhY2VzJztcbmNvbnN0IENPTExFQ1RJT05fVEVBTU1FTUJFUlMgPSAndGVhbW1lbWJlcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DTElFTlRfU0VUVElOR1MgPSAnY2xpZW50LXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTID0gJ2dsb2JhbC1zZXR0aW5ncyc7XG5jb25zdCBDT0xMRUNUSU9OX0FDVElWSVRJRVMgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBDT0xMRUNUSU9OX0ZJRUxEUyA9ICdmaWVsZHMnO1xuY29uc3QgQ09MTEVDVElPTl9QT1NTSUJMRV9WQUxVRVMgPSAncG9zc2libGUtdmFsdWVzJztcbmNvbnN0IENPTExFQ1RJT05fU1lOQ1VQX0xPRyA9ICdzeW5jdXAtbG9nJztcbmNvbnN0IENPTExFQ1RJT05fTEFOR1MgPSAnbGFuZ3VhZ2VzJztcbmNvbnN0IENPTExFQ1RJT05fV1NfU0VUVElOR1MgPSAnd29ya3NwYWNlLXNldHRpbmdzJztcbmNvbnN0IENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMgPSAnY3VycmVuY3ktcmF0ZXMnO1xuY29uc3QgQ09MTEVDVElPTl9GRUFUVVJFX01BTkFHRVIgPSAnZmVhdHVyZS1tYW5hZ2VyJztcbmNvbnN0IENPTExFQ1RJT05fQ09OVEFDVFMgPSAnY29udGFjdHMnO1xuY29uc3QgQ09MTEVDVElPTl9SRVNPVVJDRVMgPSAncmVzb3VyY2VzJztcbmNvbnN0IENPTExFQ1RJT05fUkVQT1NJVE9SWSA9ICdyZXBvc2l0b3J5JztcbmNvbnN0IENPTExFQ1RJT05fR0FaRVRURUVSID0gJ2dhemV0dGVlcic7XG5jb25zdCBDT0xMRUNUSU9OX0NBTEVOREFSUyA9ICdjYWxlbmRhcnMnO1xuY29uc3QgQ09MTEVDVElPTl9DSEFOR0VTRVRTID0gJ2NoYW5nZXNldHMnO1xuXG5jb25zdCBHQVpFVFRFRVJfRElTVEFOQ0VfRElWSURFID0gMztcblxuY29uc3QgREJfRklMRV9QUkVGSVggPSAnZGF0YWJhc2UnO1xuY29uc3QgREJfRklMRV9FWFRFTlNJT04gPSAnLmRiJztcbmNvbnN0IERCX0NPTU1PTl9EQVRBU1RPUkVfT1BUSU9OUyA9IHsgYXV0b2xvYWQ6IGZhbHNlLCBjb3JydXB0QWxlcnRUaHJlc2hvbGQ6IDAgfTtcbmNvbnN0IERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTID0gNjAwMDA7XG5jb25zdCBEQl9ERUZBVUxUX1FVRVJZX0xJTUlUID0gOTk5OTk5OTk5O1xuXG5jb25zdCBMQU5HVUFHRV9FTkdMSVNIID0gJ2VuJztcbmNvbnN0IEZTX0xPQ0FMRVNfRElSRUNUT1JZID0gJ2xhbmcnO1xuY29uc3QgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFID0gJ21hc3Rlci10cmFuc2xhdGlvbnMnO1xuY29uc3QgTEFOR1VBR0VfVFJBTlNMQVRJT05TX0ZJTEUgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IExBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DID0gJ211c3Rfc3luY190cmFuc2xhdGlvbi5qc29uJztcblxuY29uc3QgQVNBUl9ESVIgPSAnYXBwLmFzYXInO1xuY29uc3QgQVBQX0RJUkVDVE9SWSA9ICdhcHAnO1xuY29uc3QgVEVTVF9ESVJFQ1RPUlkgPSAndGVzdCc7XG5jb25zdCBTVEFUSUNfRElSID0gJ3N0YXRpYyc7XG5jb25zdCBJTUFHRVNfRElSID0gJ2ltYWdlcyc7XG5jb25zdCBET0NfSUNPTlMgPSAnZG9jLWljb25zJztcbmNvbnN0IERCX1NUQVRJQ19ESVIgPSAnZGInO1xuY29uc3QgTUlHUkFUSU9OU19ESVIgPSAnY2hhbmdlbG9nJztcblxuY29uc3QgSEFTSF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgRElHRVNUX0FMR09SSVRITV9TSEExID0gJ1NIQS0xJztcbmNvbnN0IERJR0VTVF9BTEdPUklUSE1fU0hBMjU2ID0gJ1NIQS0yNTYnO1xuXG5jb25zdCBBQ1RJVklUWV9FRElUID0gJ0FDVElWSVRZX0VESVQnO1xuY29uc3QgQUNUSVZJVFlfVklFVyA9ICdBQ1RJVklUWV9WSUVXJztcblxuY29uc3QgU1lOQ1VQX0ZPUkNFX0RBWVMgPSAxNDtcbmNvbnN0IFNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTID0gNztcbmNvbnN0IFNZTkNVUF9OT19EQVRFID0gJzE5MDAtMDEtMDFUMDA6MDA6MDAuMDAwKzAwMDAnO1xuY29uc3QgU1lOQ1VQX1RZUEVfVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBTWU5DVVBfVFlQRV9VU0VSUyA9ICd1c2Vycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BU1NFVFMgPSAnYXNzZXRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRVMgPSAnd29ya3NwYWNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HUyA9ICdnbG9iYWwtc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRVhDSEFOR0VfUkFURVMgPSAnZXhjaGFuZ2UtcmF0ZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSID0gJ2ZlYXR1cmUtbWFuYWdlcic7XG5jb25zdCBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyA9ICd3b3Jrc3BhY2UtbWVtYmVycyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BTExfRklFTERTID0gJ2ZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVTEwgPSAnYWN0aXZpdGllcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0ggPSAnYWN0aXZpdGllcy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyA9ICdhY3Rpdml0eS1maWVsZHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdhY3Rpdml0eS1maWVsZHMtc3RydWN0dXJhbC1jaGFuZ2VzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwgPSAnY29udGFjdHMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCA9ICdjb250YWN0cy1wdXNoJztcbmNvbnN0IFNZTkNVUF9UWVBFX0FDVElWSVRZX1BPU1NJQkxFX1ZBTFVFUyA9ICdhY3Rpdml0eS1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTID0gJ2NvbnRhY3QtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX0NPTlRBQ1RfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyA9ICdjb250YWN0LWZpZWxkcy1zdHJ1Y3R1cmFsLWNoYW5nZXMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ09OVEFDVF9QT1NTSUJMRV9WQUxVRVMgPSAnY29udGFjdC1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMID0gJ3Jlc291cmNlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRVNfUFVTSCA9ICdyZXNvdXJjZXMtcHVzaCc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMgPSAncmVzb3VyY2UtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMgPSAncmVzb3VyY2UtZmllbGRzLXN0cnVjdHVyYWwtY2hhbmdlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9SRVNPVVJDRV9QT1NTSUJMRV9WQUxVRVMgPSAncmVzb3VyY2UtcG9zc2libGUtdmFsdWVzLWZpZWxkcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9DT01NT05fUE9TU0lCTEVfVkFMVUVTID0gJ2NvbW1vbi1wb3NzaWJsZS12YWx1ZXMtZmllbGRzJztcbmNvbnN0IFNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyA9ICd3b3Jrc3BhY2Utc2V0dGluZ3MnO1xuY29uc3QgU1lOQ1VQX1RZUEVfTUFQX1RJTEVTID0gJ21hcC10aWxlcyc7XG5jb25zdCBTWU5DVVBfVFlQRV9HQVpFVFRFRVIgPSAnbG9jYXRvcnMnO1xuY29uc3QgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTID0gJ2NhbGVuZGFycyc7XG5cbmNvbnN0IFNZTkNVUF9TVEFUVVNfU1VDQ0VTUyA9ICdTVUNDRVNTJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfRkFJTCA9ICdGQUlMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfUEFSVElBTCA9ICdQQVJUSUFMJztcbmNvbnN0IFNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQgPSAnQ0FOQ0VMRUQnO1xuY29uc3QgU1lOQ1VQX1NZTkNfUkVRVUVTVEVEX0FUID0gJ3N5bmMtZGF0ZSc7XG5jb25zdCBTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkgPSAncmVxdWVzdGVkLWJ5JztcbmNvbnN0IFNZTkNVUF9EQVRFVElNRV9GSUVMRCA9ICd0aW1lc3RhbXAnO1xuY29uc3QgU1lOQ1VQX0RJRkZfTEVGVE9WRVIgPSAnc3luY3VwLWRpZmYtbGVmdG92ZXInO1xuY29uc3QgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwgPSAxMDtcbmNvbnN0IFNZTkNVUF9ERVRBSUxTX1NZTkNFRCA9ICdzeW5jZWQnO1xuY29uc3QgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQgPSAndW5zeW5jZWQnO1xuY29uc3QgU1lOQ1VQX1JFU09VUkNFX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSA9IDEwMDtcbmNvbnN0IFNZTkNVUF9DT05UQUNUU19QVUxMX0JBVENIX1NJWkUgPSAxMDA7XG5cbmNvbnN0IEFDVElWSVRZX1NUQVRVU19EUkFGVCA9ICdBQ1RJVklUWV9TVEFUVVNfRFJBRlQnO1xuY29uc3QgQUNUSVZJVFlfU1RBVFVTX1VOVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVNfVkFMSURBVEVEID0gJ0FDVElWSVRZX1NUQVRVU19WQUxJREFURUQnO1xuXG5jb25zdCBDVVJSRU5DWV9IT1VSID0gJzAwOjAwJztcbmNvbnN0IERFRkFVTFRfQ1VSUkVOQ1kgPSAnVVNEJztcbmNvbnN0IFJBVEVfU0FNRV9DVVJSRU5DWSA9IDE7XG5jb25zdCBSQVRFX0NVUlJFTkNZX05PVF9GT1VORCA9IDE7XG5jb25zdCBDVVJSRU5DWV9QQUlSID0gJ2N1cnJlbmN5LXBhaXInO1xuY29uc3QgVkVSU0lPTl9QQVRURVJOID0gLyhcXGQrKVxcLihcXGQrKShcXC4oXFxkKykpPygtXFx3Kyk/LztcbmNvbnN0IFZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCA9IFsxLCAyLCA0LCA1XTtcbmNvbnN0IEFNUF9DT1VOVFJZX0xPR08gPSAnYW1wQ291bnRyeUZsYWcucG5nJztcbmNvbnN0IEFTU0VUU19ESVJFQ1RPUlkgPSAnYXNzZXRzJztcbmNvbnN0IEJBU0VfNjRfUE5HX1BSRUZJWCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsJztcbi8vIEhvbGRzIHRoZSBCQVNFNjQgcmVwcmVzZW50YXRpb24gb2YgYSBhIHRyYW5zcGFyZW50IGltYWdlIDF4MSBpbiBjYXNlIHdlIGRvbid0IHlldCBoYXZlIHRoZSBjb3VudHJ5IGZsYWdcbmNvbnN0XG4gIFRSQU5TUEFSRU5UX0ZMQUcgPSAnaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjRuR1A2endBQUFnY0JBcG9jTVhFQUFBQUFTVVZPUks1Q1lJST0nO1xuY29uc3QgSEVMUF9QREZfRklMRU5BTUUgPSAnYW1wLWhlbHAnO1xuY29uc3QgSEVMUF9ESVIgPSAnaGVscCc7XG5jb25zdCBFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVggPSAvWy4hPyw7Ol0kLztcblxuY29uc3QgTUFQX1RJTEVTX0RJUiA9ICdtYXAtdGlsZXMnO1xuY29uc3QgVElMRVNfWklQX0ZJTEUgPSAnbWFwLXRpbGVzLnppcCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNvbnN0IE1BUF9NQVJLRVJfSU1BR0UgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFwQ0FZQUFBREFrNExPQUFBRmdVbEVRVlI0QWExWEE1QmpXUlROMm9XMTdkM1lhWnRyMjk2MkhVemJETnBqc3pXMjRtUnQyOHA0N3Y3enEvYlhadHJwL2xXblhyMzM3ajNuUENlODVOY3lwZ1NGZHVnQ3BXNVlvREFNUmFJTXFSaTZhS3E1RTNZcURRTzNxQXdqVldyRDhOY3EvUkJweWtkOG9aVWIva2FKdXRvdzhyMWFQOUlJMFdtTEtMSXNKeXYxdy9rcXc5Q2gyTVlkQisrMTJPbnhlZS9RTXd2ZjQvRGsvTGZwL2k0bnhUWHRPb1E0cFc1QWo3d3BpY2kxQTllcmRBTjJPSDY0eDhPU1A5ajNGdDNiN2FXa1RnL0ZtOTFzaVRyYTBmOW9uNXNRcjlJTmVqSDZDVVVVcGF2akZOcTFCK09hZGh4bW5mYThSZkVtTjhWTkFzUWhQcUY1NXhIa016ejNqU21DaFdVNmY3L1haS05IKzkraEJMT0hZb3p1S1FQeHlNUFVLa3JYL0swdVduZkZhSkdTMVFQUnRac09QdHIzTnNXMHV5aDZOTkNPa1UzWXorYlhiVDNJOEczeEU1RVhMWHRDWGJicXdDTzl6UFFZUFJUWjV2SURYRDdVK3c3ckZERW9VVWY3aWJISVI0eTZiTFZQWHJ6OEpWWkVxbDEzdHJ4d3VlL3VEaXZkM2ZrV1JiUzYvSUEyYklENHVrMFVwRjFOOHFMbGJCbFhzNEVlN0hMVGZWMWo1NEFQdk9EblNmT1dCcXRLVnZqZ0xLekY1WWRFazVld1JrR2xLMGkzM0VvZmZmYzdIVDU2akQ3LzZVK3FIM0N4N1NCTE5udEg1WUlQdk9EbnlmSVhaWVJWRFBxZ0h0THM1QUJIRDNZekx1ZXNwYjd0NzlGWTM0RGpNd3JWcmNUdXdsVDU1WU1Qdk9CblJySjRWWFRkTm5ZdWc1dWNITEJqRXB0MzA3MDFBM1RzK0hFYTczdTZkVDNGTld3ZmxZODZlTUhQaytZdStpNnB6VXBSclc3U05EZzVKSFI0S2FwbU01V3YyRThUZmNiMUhvcXFITUhVK3VXREQ3emc1NG16NS8yQlNuaXppOVQxRGc0UVFYTFRvR05Da2I2dGIxTlUrUUFsR3IxKytlQURyemhuL3U4UTJZWmhRVmxaNStDQU90cWZiaG1hVUNTMWV6TkZWbTJpbURiUG1Qbmc1d216K2d3aCtvSERjZTBlVXRRNk9HREl5UjB1VWhVc29PM3ZmRG1tZ09lekgwbVpONTl4N01CaSsrV0RMMWcvZUVpVTNhdmxpZE82NzFia0xmd2J3NVhWMlA4UHpvMHlkeTR0Mi8wZXUzM3hZU09NT0Q4aFRmNENyQnRHTVNvWGZQTGNoWCtKMHJ1U2VQdzNMWmVLMGp1UEpiWXpyaGtIMGlvN0IzazE2NGhpR3Zhd2hPS01Ma3JRTHlWcFpnOHJIRlc3RTJ1SE9MODg4SUJQbE5aMUZQenN0U0pNNjk0ZldyNlJ3cHZjSks2MCswSENJTFRCelpMRk5kdEF6SmFvaHplNjBUOHFCenloNVp1T2c1ZTd1d1FwcG9mRW1mMisrRFl2bXlTcUdCdUthaWNGMWJsUWpodUhkdkNJTXZwOHdoVFRmWnpJN1JsZHB3dFN6TCtGMSt3a2RaMlRCT1cyZ0lGODhQQlR6RC9ncGVSRUFNRWJ4bkpjYUpITkhycHpqaTBnUUNTNmhka0VlWXQ5REYvMnFQY0VDOFJNMjhId21yM3NkTnlodDAwYnlBdXQyazNndWZXTnRndE9FT0ZHVXdjWFdORGJkTmJwZ0JHeEV2S2tPUXN4aXZKeDMzaW93MFZ3NVM2U1ZUcnBWcTExeXNBMlJwN2dUZlBma3RjNnpodFhCQkMrYWRSTHNoZjZzRzJSZkhQWjVFQWM0c1ZaODN5Q04wMEZrLzRrZ2d1NDBaVHZJRW01ZzI0cXRVNEtqQnJ4L0JUVEg4aWZWQVNBRzdnS3JuV3hKRGNVN3g4WDZFY2N6aG0zbzZZaWN2c0xYV2ZoM0NoMVcwazh4MG5YRiswZkZ4Z3Q0cGh6OFF2eXBpd0NDRktNcVhDbnFYRXhqcTEwYmVIK1VVQTcrbkc2bWRHL1B1MGYzTGdGY0dybDJzMGtOTmpwbW9KOW80QjI5Q01POGRNVDRRNW94OHVpdEY2ZnFzckpPcjhxbndOYlJ6djZoU25HNXdQKzY0QzdoOWxwMzBoS050S2RXanRka2J1UEExOW5KN1R6M3pSL2liZ0FSYmhiNEFsaGF2Y0JlYm1USGNGbDJmdllFblcwb3g5eE14S0JTOGJ0SitLaUVicTl6QTRSdGhRWERoUGEwVDlURWU2OWdXdXB3YzZ1QlVwaHF1WGdmKy9Gcklqd2VIUVM0L3BkdU1lNUVSVU1IVWQ5eHY4WlI5OEN4a1M0RjJuM0VVclVaMTBFWU53N0JXbTl4MUdpUHNzaTNHZ2lHUkRLV1JZWmZYbE9OK2RmTmJNK0dnSXdZZHdBQUFBQVNVVk9SSzVDWUlJPSc7XG5jb25zdCBNQVBfTUFSS0VSX1NIQURPVyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNrQUFBQXBDQVFBQUFBQ2FjaDlBQUFDTVVsRVFWUjRBZTNTaFk3alFCQUUwQW96L2Y5L0hUTXpoZzF6cmRLVXJKYmR4K0tkMm5EOFZOdWRmc0wvVGgvLy9keVFOMlRINmYzeS9CR3BDMzc5clYrUytxcWV0Qk94SW1OUVhMOEpDQXIyVjRpTVFYSEdOSnhlQ2ZaWGhTUkJjUU1mdmtPV1VkdGZ6bExnQUVObVpEY21vMlRWbXQ4T1NNMmVYeEJwM0RqSFNNRnV0cVM3U2JtZW16QmlSK3hwS0NOVUlSa2Rra1l4aEFreUdvQnZ5UUZFSkVlZndTbW12QmZKdUo2YUtxS1duQWt2R1pPYVpYVFVnRnFZVUxXTlNIVWNrWnVSMUhJSWltVUV4dXRSeHd6T0xST0lHNHZLbUNLUXQzNjRtSWxoU3l6QWYxbTlsSFpISlpybEFPTU16dFJSaUtpbXAvcnBkSkRjOUF3cnk1eFRaQ3RlN0ZIdHVTOHdKZ2VZR3JleDI4eE5UZDA4NkRpazd2VU1zY1FPYTh5NERvR3RDQ1NrQUtsTndwZ050cGhqckM2TUlIVWtSNllXeHhzNlNjNXhxbjIyMm1tQ1JGekl0OGxFZEt4K2lrQ3RnOTFxUzJXcHdWZkJlbEpDaVFKd3Z6aXhmSTljeFpRV2dpU0plbEtud0JFbEtZdERPYjJNRmJobVVpZ2JSZVFCVjBDZzQrcU1YU3hYU3lHVW40VWJGOGwrN3FkU0duVEMwWExDbWFoSWdVSExoTE9ocFZDdHc0Q3pZWHZMUVdRYkpObXhvQ3NPS0F4U2dCSm5vNzVhdm9sa1J3OGlJQUZjc2RjMDJlOWl5Q2Q4dEh3bWVTU29LVG93SWd2c2NTR1pVT0E3UHVDTjViMkJYOW1RTTdTMHdZaE1OVTc0emdzUEJqM0hVN3dndUFmbnh4akZRR0JFNnB3TitHak1FOXpIWTd6R3A4d1Z4TVNoWVg5Tlh2RVdEM0hid0pmNGdpTzRDRklReFhTY0gxL1RNKzA0a2tCaUFBQUFBRWxGVGtTdVFtQ0MnO1xuY29uc3QgTUFQX01BUktFUl9DSVJDTEVfUkVEID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUIzUkpUVVVINGdjYkZ3b2dlb2hoRUFBQUExbEpSRUZVT011bGxjMXJIR1VjeHorL1oyWjIwekdFN2x1eVFieUlkaUV4cmU2YU52U3lTRUJCS0I3MVZBSTVtR0pBOWc4UXBSNDhhVkdLNksxNjBwdFlEN1d4aDRDVWtKckZHcEt5S1dnUW1uWGZhWnQ5eVdhZWVUenNURXhqMVlPLzAvRE16R2QrYjkvdkNFSDhjdTUxanNRUWtBRW1nRlJ3VmdNMmdSTFFPL3p3eWF0ZkF5Q1BnVVdBVjRBNVlBWklBblp3endQcXdBcHdCZmdlNkIrR3loRllHbmdYT0ErNEFCanphTjRpNFZVSCtCSjRENmlFaC9ZUjJHZkFhd2NnWTFCUHVGakR3d0RvM1YzOGRtY0FGWEdCQldBY2VET0Voc0JJa05rQTV2czR5UVN4MlR3anAzUFk4ZGlnM21hTCs2dHJ0RzRzNDlVYm9CVEJPMlhnYmFCdlhjZzhCL0FxOEQ3ZzRQc01QZk0wVHhYZXdzMCt6eDkzN3ZENzhvOVVOemJSamszcXBUd2pMNXlrKytzMlhxTVp0bUFDK0JuWXNvTnB6Z0V1eHVBa0V6eDVZWjYrWTFOODV5SzE5UTJNNXczYVo5dWtwaWJKRmhZWlg1am50dzgraEdZckxIOE9XRkxCYXN5RWZZdk41ckhHUmlsZXVreWxlQnVNUVN3THNTd3doa3J4TnNWTGw3SFRvMFR6WitsNkhzR1lab0NNQ3RKTmhnTVlPWjJqdlBvVHRmVU5sRzBkM1UyVWJWRmIzNkJ5YTQzNG1XbHFDam9EYUJLWVVNSFMyZ0RXOERCMlBFWnI2KzVCbVk4TDQzazBTMXU0eVFTK2U0eWRUcHVPMXJaQXl1Yi9oZ2c5N1ZIdXRqa2VpYUlZeU1rTDk4eHJ0b2hsbmtYc2YvNlcyRGJ4ekFtNjlRYjlCdzhSRVhwYTcxZDczYXBpb00wNkl2anREdmRYMXhpZmZwSFUxQ1MrcC84Rzh6MU5hbXFTOUhTT2V6ZFgyRyszUVFTQnVzQ21ZaUQwbFREOTFvMWxkS1ZLdHJESVdQWVVpR0MweG1nTklveGxUNUVyTExLN1UyYjcydEpoS2E0NFNwVkNMWjhEdmdMY2NMSEhGK2F4MDZOVWJxM1JMRzBCRU0rY0lEMmRZM2Vuek5wSG45QXMzVVVHYW1sYkltLzR4bndYQWlQQXg0RTJ3ZmNoRVNlYVAwdjh6RFJ1TWdGQXQ5N2czczBWdHE4dDBhbldRaGdDbjBZdHErQWIwei9zTm1QQTU0Zk5vZXQ1MUJUNDdqRVFvZi9nNFY4OUMwb1YrTVlTdFdBd0ZZVTg0allWQnE1UkJzNGo0cnFPUThyejJLazE2R2tQRVRuSUNtZ0xmR0dKdXVoaktyNHh4SWVpLzIyd0FzbXUxdlpPdDAxUDYzMEpERmFKWEhHVXVyN3YrMzF0RFBGSWxKZC91TXJCaVA3dEZ5Q1FhdlQzcVBhNlZZRk5SNm5TbnRaN2psSVk0SGdrd3V6MWJ3SDRFNW1DWElCTFE1SG5BQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURFNExUQTNMVEkzVkRJeE9qRXdPak15S3pBeU9qQXc3cTZHbndBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB3TnkweU4xUXlNVG94TURvek1pc3dNam93TUovelBpTUFBQUFBU1VWT1JLNUNZSUk9JztcbmNvbnN0IE1BUF9NQVJLRVJfQ0lSQ0xFX0dSRUVOID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0Z2NiRkJnNi9WaFc0QUFBQTVWSlJFRlVPTXVsbFVGb0hGVVl4My92emV4a3U4VmtkelBycGdwV05Kb200Sm8wTmFTbklrSHJKUmIxVUZBc1htcTNLbGl2SnFDSGhKNHFzUWR0bWtzVkZLUWdZa1RhMEVyeFVDTWhhZDFDUXJRMERiYUoyOTFrZDkxa0pyczdNODlEWnBvMEJCVDh6MlY0Ny9GNzMvZmU5Lytld0ZlbTl6Q2IxVDhZRFFNdFFCdVE4SWR6d0RRd085QlhYTnU4UGpYNkRRQmlLNngvTUdvQUI0RzNnRzdBQkhSLzJnSHl3RGh3RHJnNDBGZXNib2FLTGJBbTRDUGdDQkFCOFBBZWlGd2lnMThMK0JMNGVLQ3ZtTjJZZnhCMkJrZ0RFWS8xTHlKM2tBeVpKRU1tRWJtRFlOemZNQTBNOXc5R2t3RkhaSG9QQjJsKzZpL0F3Nk14RktNbnRwK3UraFJ4dlFHQVphZkVST2tHbHd0WHlUdUZ6ZEdlQWQ0ZjZDdFdnN001NktlSmgwZHplRGZISDMyZHBOYkl4R0tHUzRXZkFXaUpOZE83NjNtNjZsTjhmdmRyYnE3TkI5QWp3SS9BcUhnNWN5d01mQVc4R2tUMjRXTnA5S3JHME5RSW1md01qdWNBb0V1ZGxObktpYjFIcWVvVlRzNmRaWmxTQVAwV2VFUDZwZEVkeE40VDIwOVNhMlJvYW9USjdIV1VVbWhDUXhNYVNpa21zOWNabWhxaFNYK1lBM1g3Y0cwSEpSUStvMFg2ZFdZR0Y5QlZuK0xYeFd0azhqUG8wbUNyZEdtUXljOHdrZjJON25nSEl1ZmlXRFdVVUNiUUp2MmkxUUVlMG5ZUzF4djRvekIzUDgzdDVIZ092eS9md296RWlYaGhySVV5bnVYcVNxaUU1SDlLSW5BckR0WmZaV3BMRlhUZlRnNWdsTjFWbHAwU0xiRm1kS21qbE5vV29rdWRwK05Qa0xPWEtOWEtDQ0Z3YmFkbVYxZnVTZCtiZVluRThtd21TamQ0YmxlS2xObUs0MVczU2JkS3lteWxxNm1kWCs1T3NscXpFRXFBSkE5TVMyRFc5eVlBbHd0WHlicExuTmg3bE01aysvcnV5c1ZWTGtJSU9wUHRmTkQ1TmdzcldTN2N2cklPVzllNE5MUlo3ZnlkWnVlbm5yQU5IQktJMEtwbmM4ditrNDZHUGZUdWZvRW5vNC96eU00a3o1aDdlT1dwbDNpejdUVUtheVZPVFE0elg3NkRGQkpnVlVqUmYzem83NW5BS1JkOW82Y2xrcHRyODV5Y084dUJ1bjEweHp0NE50RzIzcnZzSmM3UC9zQ0YyMWZJMnJrTjYwbStrSVkyRnBKeW85djRCaDhHRGdVV2RHMEhrWE9KZUdFa2dsS3RmUC9NaEJBQjdEdWhxZlI3cDYyc1JHeTQyMjlCeDN5ald4S0pIZ21oRWhvNWQ1a0ZLNHZsMkVoa0FGdEY4cG5RVlByZDAxYldWWXBvbmZIdkRWWUpaYnEybzl1TEs3aTJVL052YzF3SWNVNGEydGc3bjVTcXJsTEVqVHBldkRTSytDOVBnQklxVVZ1cVlPZFc3Z0hUMHRCbTA2ZUtsWkNVS0NCcUdQU01mUS9BUHkxWGcydjZLSXNGQUFBQUFFbEZUa1N1UW1DQyc7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbmNvbnN0IFBPTFlHT05fQkFTRV9DT0xPUiA9ICcjMzM4OGZmJztcblxuY29uc3QgREdfQ09NUEFOWV9OQU1FID0gJ0RldmVsb3BtZW50IEdhdGV3YXknO1xuY29uc3QgREdfQUREUkVTU18xID0gJzExMTAgVmVybW9udCBBdmUsIE5XLCBTdWl0ZSA1MDAnO1xuY29uc3QgREdfQUREUkVTU18yID0gJ1dhc2hpbmd0b24sIERDIDIwMDA1IFVTQSc7XG5jb25zdCBER19DT05UQUNUX0lORk8gPSAnaW5mb0BkZXZlbG9wbWVudGdhdGV3YXkub3JnLCBUZWw6ICsxLjIwMi41NzIuOTIwMCwgRmF4OiArMSAyMDIuNTcyLjkyOTAnO1xuXG5jb25zdCBMT0dfRElSID0gJ2xvZ3MnO1xuY29uc3QgTE9HX0ZJTEVfTkFNRSA9ICdhbXBvZmZsaW5lJztcbmNvbnN0IExPR19GSUxFX0VYVEVOU0lPTiA9ICdsb2cnO1xuXG4vLyBNZXNzYWdlIGNvbnN0YW50c1xuLy8gdG90YWwgYW1vdW50IG9mIHRpbWUgdGhlIG1lc3NhZ2Ugc3RheXMgdmlzaWJsZVxuY29uc3QgTUVTU0FHRV9USU1FT1VUID0gMTAgKiAxMDAwO1xuLy8gd2hlbiBpdCdzIHRoaXMgYW1vdW50IG9mIHRpbWUgbGVmdCwgd2Ugbm9maXR5IHRoZSB1c2VyIHRoYXQgdGhlIG1lc3NhZ2UgaXMgYWJvdXQgdG8gZGlzYXBwZWFyXG5jb25zdCBNRVNTQUdFX0RJU0FQUEVBUl9USU1FT1VUID0gTUVTU0FHRV9USU1FT1VUIC8gNTtcbmNvbnN0IE1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwgPSAxMDA7XG4vLyBob3cgbG9uZyBzaG91bGQgdGhlIGVudGVyL2xlYXZlIGFuaW1hdGlvbiBydW4obXMpXG4vLyAoaWYgeW91IGNoYW5nZSB0aGlzIHlvdSdsbCB3YW5uYSBjaGFuZ2UgaXQgaW4gc3R5bGUuY3NzLCB0b28pXG5jb25zdCBNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiA9IDUwMDtcblxuLy8gdGhpcyBpcyB0aGUgaW50ZXJuYWwgZGF0ZSBmb3JtYXQgdXNlZCB0byBzdG9yZSBhbmQgc3luYyB1cCBkYXRlc1xuY29uc3QgSU5URVJOQUxfREFURV9GT1JNQVQgPSAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJztcbi8vIGN1cnJlbnRseSBzdXBwb3J0ZWQgbWF4ICYgbWluIHllYXJzIGluIEFNUCwgaS5lLiBmcm9tIDE5NzAtMDEtMDEgdGlsbCAyMDUwLTEyLTMxXG5jb25zdCBNSU5fU1VQUE9SVEVEX1lFQVIgPSAxOTcwO1xuY29uc3QgTUFYX1NVUFBPUlRFRF9ZRUFSID0gMjA1MDtcblxuY29uc3QgVVBEQVRFU19ESVIgPSAndXBkYXRlcyc7XG5jb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9ICdDb250ZW50LURpc3Bvc2l0aW9uJztcbmNvbnN0IFVQREFURV9UTVBfRklMRSA9ICdhbXAtb2ZmbGluZS1pbnN0YWxsZXIudG1wJztcblxuY29uc3QgT1RIRVJfSUQgPSA5OTk5OTk5OTk7XG5jb25zdCBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyA9IDIwO1xuY29uc3QgTlJfTE9HX0ZJTEVTID0gMTAwO1xuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zLCBleGFtcGxlOiBcIlAxWTJNMTBEVDJIMzBNXCJcbmNvbnN0IE9MRF9TWU5DX0xPR1NfRFVSQVRJT05fSVNPXzg2MDEgPSAnUDZNJztcbmNvbnN0IE5SX09MRF9TWU5DX0xPR1NfVE9fS0VFUF9NSU5JTVVNID0gTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVM7XG5cbmNvbnN0IE1BU1RFUl9CUkFOQ0ggPSAnbWFzdGVyJztcbmNvbnN0IERFVkVMT1BfQlJBTkNIID0gJ2RldmVsb3AnO1xuY29uc3QgUkVMRUFTRV9CUkFOQ0hfUkVHRVggPSAvcmVsZWFzZVxcLy87XG5jb25zdCBSRUxFQVNFX0JSQU5DSEVTID0gW01BU1RFUl9CUkFOQ0gsIFJFTEVBU0VfQlJBTkNIX1JFR0VYXTtcblxuY29uc3QgRElTQUJMRV9DSEFOR0VMT0dTID0gJ0RJU0FCTEVfQ0hBTkdFTE9HUyc7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEJBU0VfUkVTVF9VUkwsXG4gIENPTk5FQ1RJT05fVElNRU9VVCxcbiAgQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCxcbiAgVElNRU9VVF9DSEVDS19JTlRFUlZBTCxcbiAgTUFYX1JFVFJZX0FURU1QVFMsXG4gIEVSUk9SU19UT19SRVRSWSxcbiAgRVJST1JTX05PX0FNUF9TRVJWRVIsXG4gIENPTk5FQ1RJVklUWV9DSEVDS19JTlRFUlZBTCxcbiAgV09SS1NQQUNFX1VSTCxcbiAgTE9HSU5fVVJMLFxuICBERVNLVE9QX1VSTCxcbiAgREVTS1RPUF9DVVJSRU5UX1VSTCxcbiAgU1lOQ1VQX1JFRElSRUNUX1VSTCxcbiAgU1lOQ1VQX0hJU1RPUllfVEFSR0VULFxuICBTWU5DVVBfU1VNTUFSWV9VUkwsXG4gIEFDVElWSVRZX1BSRVZJRVdfVVJMLFxuICBBQ1RJVklUWV9FRElUX1VSTCxcbiAgVVBEQVRFX1VSTCxcbiAgU0VUVVBfVVJMLFxuICBTRVRUSU5HU19VUkwsXG4gIENPTExFQ1RJT05fVVNFUlMsXG4gIENPTExFQ1RJT05fV09SS1BBQ0VTLFxuICBDT0xMRUNUSU9OX1RFQU1NRU1CRVJTLFxuICBDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyxcbiAgQ09MTEVDVElPTl9HTE9CQUxfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQUNUSVZJVElFUyxcbiAgQ09MTEVDVElPTl9GSUVMRFMsXG4gIENPTExFQ1RJT05fUE9TU0lCTEVfVkFMVUVTLFxuICBDT0xMRUNUSU9OX1NZTkNVUF9MT0csXG4gIENPTExFQ1RJT05fTEFOR1MsXG4gIENPTExFQ1RJT05fV1NfU0VUVElOR1MsXG4gIENPTExFQ1RJT05fQ1VSUkVOQ1lfUkFURVMsXG4gIENPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSLFxuICBDT0xMRUNUSU9OX0NPTlRBQ1RTLFxuICBDT0xMRUNUSU9OX1JFU09VUkNFUyxcbiAgQ09MTEVDVElPTl9SRVBPU0lUT1JZLFxuICBDT0xMRUNUSU9OX0dBWkVUVEVFUixcbiAgQ09MTEVDVElPTl9DQUxFTkRBUlMsXG4gIENPTExFQ1RJT05fQ0hBTkdFU0VUUyxcbiAgR0FaRVRURUVSX0RJU1RBTkNFX0RJVklERSxcbiAgREJfRklMRV9QUkVGSVgsXG4gIERCX0ZJTEVfRVhURU5TSU9OLFxuICBEQl9DT01NT05fREFUQVNUT1JFX09QVElPTlMsXG4gIERCX0FVVE9DT01QQUNUX0lOVEVSVkFMX01JTElTRUNPTkRTLFxuICBEQl9ERUZBVUxUX1FVRVJZX0xJTUlULFxuICBMQU5HVUFHRV9FTkdMSVNILFxuICBGU19MT0NBTEVTX0RJUkVDVE9SWSxcbiAgTEFOR1VBR0VfTUFTVEVSX1RSQU5TTEFUSU9OU19GSUxFLFxuICBMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSxcbiAgTEFOR1VBR0VfTkVXX1RSQU5TTEFUSU9OU19NVVNUX1NZTkMsXG4gIEFTQVJfRElSLFxuICBBUFBfRElSRUNUT1JZLFxuICBURVNUX0RJUkVDVE9SWSxcbiAgU1RBVElDX0RJUixcbiAgSU1BR0VTX0RJUixcbiAgRE9DX0lDT05TLFxuICBEQl9TVEFUSUNfRElSLFxuICBNSUdSQVRJT05TX0RJUixcbiAgSEFTSF9JVEVSQVRJT05TLFxuICBESUdFU1RfQUxHT1JJVEhNX1NIQTEsXG4gIERJR0VTVF9BTEdPUklUSE1fU0hBMjU2LFxuICBBQ1RJVklUWV9FRElULFxuICBBQ1RJVklUWV9WSUVXLFxuICBTWU5DVVBfRk9SQ0VfREFZUyxcbiAgU1lOQ1VQX0JFU1RfQkVGT1JFX0RBWVMsXG4gIFNZTkNVUF9OT19EQVRFLFxuICBTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMsXG4gIFNZTkNVUF9UWVBFX1VTRVJTLFxuICBTWU5DVVBfVFlQRV9BU1NFVFMsXG4gIFNZTkNVUF9UWVBFX1dPUktTUEFDRVMsXG4gIFNZTkNVUF9UWVBFX0dTLFxuICBTWU5DVVBfVFlQRV9FWENIQU5HRV9SQVRFUyxcbiAgU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSLFxuICBTWU5DVVBfVFlQRV9XT1JLU1BBQ0VfTUVNQkVSUyxcbiAgU1lOQ1VQX1RZUEVfQUxMX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMLFxuICBTWU5DVVBfVFlQRV9BQ1RJVklUSUVTX1BVU0gsXG4gIFNZTkNVUF9UWVBFX0FDVElWSVRZX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVMTCxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVFNfUFVTSCxcbiAgU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEUyxcbiAgU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTLFxuICBTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVTEwsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFU19QVVNILFxuICBTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMsXG4gIFNZTkNVUF9UWVBFX1JFU09VUkNFX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyxcbiAgU1lOQ1VQX1RZUEVfV09SS1NQQUNFX1NFVFRJTkdTLFxuICBTWU5DVVBfVFlQRV9NQVBfVElMRVMsXG4gIFNZTkNVUF9UWVBFX0dBWkVUVEVFUixcbiAgU1lOQ1VQX1RZUEVfQ0FMRU5EQVJTLFxuICBTWU5DVVBfU1RBVFVTX1NVQ0NFU1MsXG4gIFNZTkNVUF9TVEFUVVNfRkFJTCxcbiAgU1lOQ1VQX1NUQVRVU19QQVJUSUFMLFxuICBTWU5DVVBfU1RBVFVTX0NBTkNFTEVELFxuICBTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQsXG4gIFNZTkNVUF9TWU5DX1JFUVVFU1RFRF9CWSxcbiAgU1lOQ1VQX0RBVEVUSU1FX0ZJRUxELFxuICBTWU5DVVBfRElGRl9MRUZUT1ZFUixcbiAgU1lOQ1VQX0RFUEVOREVOQ1lfQ0hFQ0tfSU5URVJWQUwsXG4gIFNZTkNVUF9ERVRBSUxTX1NZTkNFRCxcbiAgU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQsXG4gIFNZTkNVUF9SRVNPVVJDRV9QVUxMX0JBVENIX1NJWkUsXG4gIFNZTkNVUF9BQ1RJVklUSUVTX1BVTExfQkFUQ0hfU0laRSxcbiAgU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSxcbiAgQUNUSVZJVFlfU1RBVFVTX0RSQUZULFxuICBBQ1RJVklUWV9TVEFUVVNfVU5WQUxJREFURUQsXG4gIEFDVElWSVRZX1NUQVRVU19WQUxJREFURUQsXG4gIENVUlJFTkNZX0hPVVIsXG4gIERFRkFVTFRfQ1VSUkVOQ1ksXG4gIFJBVEVfU0FNRV9DVVJSRU5DWSxcbiAgUkFURV9DVVJSRU5DWV9OT1RfRk9VTkQsXG4gIENVUlJFTkNZX1BBSVIsXG4gIFZFUlNJT05fUEFUVEVSTixcbiAgVkVSU0lPTl9QQVRURVJOX0dST1VQU19UT19FWFRSQUNULFxuICBBTVBfQ09VTlRSWV9MT0dPLFxuICBBU1NFVFNfRElSRUNUT1JZLFxuICBCQVNFXzY0X1BOR19QUkVGSVgsXG4gIFRSQU5TUEFSRU5UX0ZMQUcsXG4gIEhFTFBfUERGX0ZJTEVOQU1FLFxuICBIRUxQX0RJUixcbiAgRU5EU19XSVRIX1BVTkNUVUFUSU9OX1JFR0VYLFxuICBNQVBfVElMRVNfRElSLFxuICBUSUxFU19aSVBfRklMRSxcbiAgTUFQX01BUktFUl9JTUFHRSxcbiAgTUFQX01BUktFUl9TSEFET1csXG4gIE1BUF9NQVJLRVJfQ0lSQ0xFX1JFRCxcbiAgTUFQX01BUktFUl9DSVJDTEVfR1JFRU4sXG4gIFBPTFlHT05fQkFTRV9DT0xPUixcbiAgREdfQ09NUEFOWV9OQU1FLFxuICBER19BRERSRVNTXzEsXG4gIERHX0FERFJFU1NfMixcbiAgREdfQ09OVEFDVF9JTkZPLFxuICBMT0dfRElSLFxuICBMT0dfRklMRV9OQU1FLFxuICBMT0dfRklMRV9FWFRFTlNJT04sXG4gIE1FU1NBR0VfVElNRU9VVCxcbiAgTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCxcbiAgTUVTU0FHRV9DSEVDS19JTlRFUlZBTCxcbiAgTUVTU0FHRV9BTklNQVRJT05fRFVSQVRJT04sXG4gIElOVEVSTkFMX0RBVEVfRk9STUFULFxuICBNSU5fU1VQUE9SVEVEX1lFQVIsXG4gIE1BWF9TVVBQT1JURURfWUVBUixcbiAgVVBEQVRFU19ESVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBVUERBVEVfVE1QX0ZJTEUsXG4gIE9USEVSX0lELFxuICBOUl9TWU5DX0hJU1RPUllfRU5UUklFUyxcbiAgTlJfTE9HX0ZJTEVTLFxuICBPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxLFxuICBOUl9PTERfU1lOQ19MT0dTX1RPX0tFRVBfTUlOSU1VTSxcbiAgTUFTVEVSX0JSQU5DSCxcbiAgREVWRUxPUF9CUkFOQ0gsXG4gIFJFTEVBU0VfQlJBTkNIX1JFR0VYLFxuICBSRUxFQVNFX0JSQU5DSEVTLFxuICBESVNBQkxFX0NIQU5HRUxPR1Ncbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG4vKipcbiAqIEBhdXRob3IgTmFkZWpkYSBNYW5kcmVzY3VcbiAqL1xuXG5jb25zdCBQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQgPSAnL1BVQkxJQyBWSUVXL0xvZ2luIC0gVXNlciBNYW5hZ2VtZW50L0NoYW5nZSBQYXNzd29yZCc7XG5jb25zdCBQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4gPSAnL1BVQkxJQyBWSUVXL0xvZ2luIC0gVXNlciBNYW5hZ2VtZW50L1Ryb3VibGUgc2lnbmluZyBpbic7XG5jb25zdCBBQ1RJVklUWV9ERUxJVkVSWV9SQVRFID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvRnVuZGluZy9GdW5kaW5nIEluZm9ybWF0aW9uL0RlbGl2ZXJ5IHJhdGUnO1xuY29uc3QgQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkcgPSAnL1BST0pFQ1QgTUFOQUdFTUVOVC9Qcm9qZWN0IElEIGFuZCBQbGFubmluZyc7XG5jb25zdCBBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUID0gJy9QUk9KRUNUIE1BTkFHRU1FTlQvUHJvamVjdCBJRCBhbmQgUGxhbm5pbmcvUGxhbm5pbmcvRHVyYXRpb24gb2YgUHJvamVjdCc7XG5jb25zdCBBQ1RJVklUWV9URUFNX0xFQURFUiA9ICcvUFJPSkVDVCBNQU5BR0VNRU5UL1Byb2plY3QgSUQgYW5kIFBsYW5uaW5nL0lkZW50aWZpY2F0aW9uL0RhdGEgVGVhbSBMZWFkZXInO1xuY29uc3QgQUNUSVZJVFlfU0FNRV9BU19QUk9QT1NFRF9TVEFSVF9EQVRFID1cbiAgJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nL0FjdHVhbCBTdGFydCBEYXRlL1NhbWUgQXMgUHJvcG9zZWQgU3RhcnQgRGF0ZSc7XG5jb25zdCBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUgPVxuICAnL0FjdGl2aXR5IEZvcm0vUGxhbm5pbmcvQWN0dWFsIEFwcHJvdmFsIERhdGUvU2FtZSBBcyBQcm9wb3NlZCBBcHByb3ZhbCBEYXRlJztcbmNvbnN0IEFDVElWSVRZX0lERU5USUZJQ0FUSU9OID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uJztcbmNvbnN0IEFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSA9ICcvQWN0aXZpdHkgRm9ybS9JZGVudGlmaWNhdGlvbi9BY3Rpdml0eSBMYXN0IFVwZGF0ZWQgYnknO1xuY29uc3QgQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OID0gJy9BY3Rpdml0eSBGb3JtL0lkZW50aWZpY2F0aW9uL0FjdGl2aXR5IFVwZGF0ZWQgT24nO1xuY29uc3QgQUNUSVZJVFlfRlVORElORyA9ICcvQWN0aXZpdHkgRm9ybS9GdW5kaW5nJztcbmNvbnN0IEFGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNID0gYCR7QUNUSVZJVFlfRlVORElOR30vRnVuZGluZyBHcm91cC9GdW5kaW5nIEl0ZW1gO1xuY29uc3QgQUNUSVZJVFlfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzJztcbmNvbnN0IEFDVElWSVRZX1BSSU1BUllfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzL1ByaW1hcnkgU2VjdG9ycyc7XG5jb25zdCBBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyA9ICcvQWN0aXZpdHkgRm9ybS9TZWN0b3JzL1NlY29uZGFyeSBTZWN0b3JzJztcblxuY29uc3QgQUNUSVZJVFlfU1RSVUNUVVJFUyA9ICcvQWN0aXZpdHkgRm9ybS9TdHJ1Y3R1cmVzJztcbmNvbnN0IEFDVElWSVRZX1NUUlVDVFVSRVNfQUREX1NUUlVDVFVSRSA9IGAke0FDVElWSVRZX1NUUlVDVFVSRVN9L0FkZCBTdHJ1Y3R1cmVgO1xuXG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TID0gJy9BY3Rpdml0eSBGb3JtL09yZ2FuaXphdGlvbnMnO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9Eb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9CZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9Db250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1kgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9JbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVAgPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9SZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TfS9SZWxhdGVkIEdvdmVybm1lbnQgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU30vU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgQUREX0ZVTkRJTkdfQVVUTyA9ICdBZGQgRnVuZGluZyBJdGVtIEF1dG9tYXRpY2FsbHknO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19CRU5FRklDSUFSWV9BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyA9IGAke0FDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWX0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT059LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX0lNUExFTUVOVElOR19BR0VOQ1l9LyR7QUREX0ZVTkRJTkdfQVVUT31gO1xuY29uc3QgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUF9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUH0vJHtBRERfRlVORElOR19BVVRPfWA7XG5jb25zdCBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPID0gYCR7QUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUxBVEVEX0dPVkVSTk1FTlRfT1JHQU5JWkFUSU9OfS8ke0FERF9GVU5ESU5HX0FVVE99YDtcbmNvbnN0IEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQX0FERF9GVU5ESU5HX0FVVE8gPSBgJHtBQ1RJVklUWV9PUkdBTklaQVRJT05TX1NFQ1RPUl9HUk9VUH0vJHtBRERfRlVORElOR19BVVRPfWA7XG5cbmNvbnN0IEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIID0gYCR7QUNUSVZJVFlfRlVORElOR30vU2VhcmNoIEZ1bmRpbmcgT3JnYW5pemF0aW9uc2A7XG5jb25zdCBBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSF9PUkdBTklaQVRJT04gPSBgJHtBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSH0vU2VhcmNoIE9yZ2FuaXphdGlvbnNgO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUgPSBgJHtBQ1RJVklUWV9GVU5ESU5HX1NFQVJDSH0vU2VsZWN0IE9yZ2FuaXphdGlvbiBUeXBlYDtcblxuY29uc3QgQUNUSVZJVFlfUFJPR1JBTSA9ICcvQWN0aXZpdHkgRm9ybS9Qcm9ncmFtJztcbmNvbnN0IEFDVElWSVRZX1BMQU5OSU5HID0gJy9BY3Rpdml0eSBGb3JtL1BsYW5uaW5nJztcblxuY29uc3QgQUNUSVZJVFlfQ09OVEFDVCA9ICcvQWN0aXZpdHkgRm9ybS9Db250YWN0cyc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5UID0gJy9BY3Rpdml0eSBGb3JtL1JlbGF0ZWQgRG9jdW1lbnRzL0FkZCBOZXcgRG9jdW1lbnQnO1xuY29uc3QgQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9XRUJMSU5LID0gJy9BY3Rpdml0eSBGb3JtL1JlbGF0ZWQgRG9jdW1lbnRzL0FkZCBOZXcgV2ViIExpbmsnO1xuXG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX0lTU1VFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0FkZCBJc3N1ZSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL0RlbGV0ZSBJdGVtJztcbmNvbnN0IEFDVElWSVRZX0lTU1VFU19BRERfTUVBU1VSRSA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9BZGQgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX01FQVNVUkUgPSAnL0FjdGl2aXR5IEZvcm0vSXNzdWVzIFNlY3Rpb24vSXNzdWUvTWVhc3VyZS9EZWxldGUgSXRlbSc7XG5jb25zdCBBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SID0gJy9BY3Rpdml0eSBGb3JtL0lzc3VlcyBTZWN0aW9uL0lzc3VlL01lYXN1cmUvQWRkIEl0ZW0nO1xuY29uc3QgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9BQ1RPUiA9ICcvQWN0aXZpdHkgRm9ybS9Jc3N1ZXMgU2VjdGlvbi9Jc3N1ZS9NZWFzdXJlL0FjdG9yL0RlbGV0ZSBJdGVtJztcblxuY29uc3QgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRGlzYnVyc2VtZW50cy9EaXNidXJzZW1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgSW1wbGVtZW50aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIENvbnRyYWN0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEJlbmVmaWNpYXJ5IEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIERvbm9yIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBFeGVjdXRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9EaXNidXJzZW1lbnRzL0Rpc2J1cnNlbWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZWdpb25hbCBHcm91cGA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlc3BvbnNpYmxlIE9yZ2FuaXphdGlvbmA7XG5jb25zdCBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0Rpc2J1cnNlbWVudHMvRGlzYnVyc2VtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFNlY3RvciBHcm91cGA7XG5cbmNvbnN0IEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9Db21taXRtZW50cy9Db21taXRtZW50cyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEltcGxlbWVudGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBDb250cmFjdGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBCZW5lZmljaWFyeSBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBEb25vciBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRXhlY3V0aW5nIEFnZW5jeWA7XG5jb25zdCBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0NvbW1pdG1lbnRzL0NvbW1pdG1lbnRzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVnaW9uYWwgR3JvdXBgO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04gPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBSZXNwb25zaWJsZSBPcmdhbml6YXRpb25gO1xuY29uc3QgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vQ29tbWl0bWVudHMvQ29tbWl0bWVudHMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBTZWN0b3IgR3JvdXBgO1xuXG5jb25zdCBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L0V4cGVuZGl0dXJlcy9FeHBlbmRpdHVyZXMgVGFibGUvRnVuZGluZyBGbG93cyBPcmdSb2xlIFNlbGVjdG9yL0FkZCBJbXBsZW1lbnRpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQ29udHJhY3RpbmcgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgQmVuZWZpY2lhcnkgQWdlbmN5YDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgRG9ub3IgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIEV4ZWN1dGluZyBBZ2VuY3lgO1xuY29uc3QgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAgPVxuICBgJHtBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTX0vRXhwZW5kaXR1cmVzL0V4cGVuZGl0dXJlcyBUYWJsZS9GdW5kaW5nIEZsb3dzIE9yZ1JvbGUgU2VsZWN0b3IvQWRkIFJlZ2lvbmFsIEdyb3VwYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgUmVzcG9uc2libGUgT3JnYW5pemF0aW9uYDtcbmNvbnN0IEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9FeHBlbmRpdHVyZXMvRXhwZW5kaXR1cmVzIFRhYmxlL0Z1bmRpbmcgRmxvd3MgT3JnUm9sZSBTZWxlY3Rvci9BZGQgU2VjdG9yIEdyb3VwYDtcblxuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9IGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zYDtcbmNvbnN0IE1URUZfUFJPSkVDVElPTlNfQU1PVU5UID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9BbW91bnRgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19DVVJSRU5DWSA9XG4gIGAke0FGX0ZVTkRJTkdfRlVORElOR0dST1VQX0ZVTkRJTkdJVEVNfS9NVEVGIFByb2plY3Rpb25zL01URUYgUHJvamVjdGlvbnMgVGFibGUvQ3VycmVuY3lgO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9NVEVGIFByb2plY3Rpb25gO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OU19EQVRFID1cbiAgYCR7QUZfRlVORElOR19GVU5ESU5HR1JPVVBfRlVORElOR0lURU19L01URUYgUHJvamVjdGlvbnMvTVRFRiBQcm9qZWN0aW9ucyBUYWJsZS9Qcm9qZWN0aW9uIERhdGVgO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQsXG4gIFBVQkxJQ19WSUVXX1RST1VCTEVfU0lHTl9JTixcbiAgQUNUSVZJVFlfREVMSVZFUllfUkFURSxcbiAgQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkcsXG4gIEFDVElWSVRZX0RVUkFUSU9OX09GX1BST0pFQ1QsXG4gIEFDVElWSVRZX1RFQU1fTEVBREVSLFxuICBBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUsXG4gIEFDVElWSVRZX1NBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURSxcbiAgQUNUSVZJVFlfSURFTlRJRklDQVRJT04sXG4gIEFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSxcbiAgQUNUSVZJVFlfTEFTVF9VUERBVEVEX09OLFxuICBBQ1RJVklUWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMsXG4gIEFDVElWSVRZX1NFQ09OREFSWV9TRUNUT1JTLFxuICBBQ1RJVklUWV9TVFJVQ1RVUkVTLFxuICBBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlMsXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19DT05UUkFDVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFTEFURURfR09WRVJOTUVOVF9PUkdBTklaQVRJT04sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0RPTk9SX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPLFxuICBBQ1RJVklUWV9PUkdBTklaQVRJT05TX0VYRUNVVElOR19BR0VOQ1lfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8sXG4gIEFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVHSU9OQUxfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRVNQT05TSUJMRV9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyxcbiAgQUNUSVZJVFlfRlVORElOR19TRUFSQ0gsXG4gIEFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUsXG4gIEFDVElWSVRZX1BST0dSQU0sXG4gIEFDVElWSVRZX1BMQU5OSU5HLFxuICBBQ1RJVklUWV9DT05UQUNULFxuICBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX0RPQ1VNRU5ULFxuICBBQ1RJVklUWV9ET0NVTUVOVFNfQUREX1dFQkxJTkssXG4gIEFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUsXG4gIEFDVElWSVRZX0lTU1VFU19ERUxFVEVfSVNTVUUsXG4gIEFDVElWSVRZX0lTU1VFU19BRERfTUVBU1VSRSxcbiAgQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFLFxuICBBQ1RJVklUWV9JU1NVRVNfQUREX0FDVE9SLFxuICBBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0FDVE9SLFxuICBBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0JFTkVGSUNJQVJZX0FHRU5DWSxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRUdJT05BTF9HUk9VUCxcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9JTVBMRU1FTlRJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1ksXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVTUE9OU0lCTEVfT1JHQU5JWkFUSU9OLFxuICBBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1ksXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAsXG4gIEFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfU0VDVE9SX0dST1VQLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBNVEVGX1BST0pFQ1RJT05TX0FNT1VOVCxcbiAgTVRFRl9QUk9KRUNUSU9OU19DVVJSRU5DWSxcbiAgTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OLFxuICBNVEVGX1BST0pFQ1RJT05TX0RBVEUsXG59KTtcbiIsImltcG9ydCBGTUMgZnJvbSAnLi9GZWF0dXJlTWFuYWdlckNvbnN0YW50cyc7XG5cbi8qKlxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5cbi8vIEFjdGl2aXR5IGZpZWxkc1xuY29uc3QgQUNUSVZJVFlfQlVER0VUID0gJ2FjdGl2aXR5X2J1ZGdldCc7XG5jb25zdCBBQ1RJVklUWV9TVEFUVVMgPSAnYWN0aXZpdHlfc3RhdHVzJztcbmNvbnN0IFNUQVRVU19SRUFTT04gPSAnc3RhdHVzX3JlYXNvbic7XG5jb25zdCBGSU5BTkNJQUxfSU5TVFJVTUVOVCA9ICdmaW5hbmNpYWxfaW5zdHJ1bWVudCc7XG5jb25zdCBUWVBFX09GX0lNUExFTUVOVEFUSU9OID0gJ3R5cGVfb2ZfaW1wbGVtZW50YXRpb24nO1xuY29uc3QgT0JKRUNUSVZFID0gJ29iamVjdGl2ZSc7XG5jb25zdCBSRVNVTFRTID0gJ3Jlc3VsdHMnO1xuY29uc3QgQlVER0VUX0NPREVfUFJPSkVDVF9JRCA9ICdidWRnZXRfY29kZV9wcm9qZWN0X2lkJztcbmNvbnN0IEFDVFVBTF9BUFBST1ZBTF9EQVRFID0gJ2FjdHVhbF9hcHByb3ZhbF9kYXRlJztcbmNvbnN0IEZVTkRJTkdTID0gJ2Z1bmRpbmdzJztcbmNvbnN0IEZVTkRJTkdfRE9OT1JfT1JHX0lEID0gJ2Rvbm9yX29yZ2FuaXphdGlvbl9pZCc7XG5jb25zdCBJU19EUkFGVCA9ICdpc19kcmFmdCc7XG5jb25zdCBPUkdfUk9MRV9PUkdfSUQgPSAnb3JnYW5pemF0aW9uJztcbmNvbnN0IEFERElUSU9OQUxfSU5GTyA9ICdhZGRpdGlvbmFsX2luZm8nO1xuY29uc3QgUFJJTUFSWV9TRUNUT1JTID0gJ3ByaW1hcnlfc2VjdG9ycyc7XG5jb25zdCBTRUNPTkRBUllfU0VDVE9SUyA9ICdzZWNvbmRhcnlfc2VjdG9ycyc7XG5jb25zdCBURVJUSUFSWV9TRUNUT1JTID0gJ3RlcnRpYXJ5X3NlY3RvcnMnO1xuY29uc3QgVEFHX1NFQ1RPUlMgPSAndGFnX3NlY3RvcnMnO1xuY29uc3QgU0VDVE9SID0gJ3NlY3Rvcic7XG5jb25zdCBTRUNUT1JfUEVSQ0VOVEFHRSA9ICdzZWN0b3JfcGVyY2VudGFnZSc7XG5jb25zdCBGSU5BTkNJTkdfSU5TVFJVTUVOVCA9ICdmaW5hbmNpbmdfaW5zdHJ1bWVudCc7XG5jb25zdCBNT0RBTElUSUVTID0gJ21vZGFsaXRpZXMnO1xuY29uc3QgTElORV9NSU5JU1RSWV9SQU5LID0gJ2xpbmVfbWluaXN0cnlfcmFuayc7XG5jb25zdCBHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIgPSAnZ292ZXJubWVudF9hZ3JlZW1lbnRfbnVtYmVyJztcbmNvbnN0IEZVTkRJTkdfU1RBVFVTID0gJ2Z1bmRpbmdfc3RhdHVzJztcbmNvbnN0IExPQ0FUSU9OUyA9ICdsb2NhdGlvbnMnO1xuY29uc3QgTE9DQVRJT04gPSAnbG9jYXRpb24nO1xuY29uc3QgTE9DQVRJT05fUEVSQ0VOVEFHRSA9ICdsb2NhdGlvbl9wZXJjZW50YWdlJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xPQ0FUSU9OID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uJztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsJztcbmNvbnN0IEFQUFJPVkFMX1NUQVRVUyA9ICdhcHByb3ZhbF9zdGF0dXMnO1xuY29uc3QgQVBQUk9WRURfQlkgPSAnYXBwcm92ZWRfYnknO1xuY29uc3QgQVBQUk9WQUxfREFURSA9ICdhcHByb3ZhbF9kYXRlJztcbmNvbnN0IFRZUEVfT0ZfQVNTSVNUQU5DRSA9ICd0eXBlX29mX2Fzc2lzdGFuY2UnO1xuY29uc3QgRVhQRU5ESVRVUkVfQ0xBU1MgPSAnZXhwZW5kaXR1cmVfY2xhc3MnO1xuY29uc3QgRlVORElOR19ERVRBSUxTID0gJ2Z1bmRpbmdfZGV0YWlscyc7XG5jb25zdCBNT0RFX09GX1BBWU1FTlQgPSAnbW9kZV9vZl9wYXltZW50JztcbmNvbnN0IEZVTkRJTkdfQ0xBU1NJRklDQVRJT05fREFURSA9ICdmdW5kaW5nX2NsYXNzaWZpY2F0aW9uX2RhdGUnO1xuY29uc3QgQUdSRUVNRU5UID0gJ2FncmVlbWVudCc7XG5jb25zdCBET05PUl9PQkpFQ1RJVkUgPSAnZG9ub3Jfb2JqZWN0aXZlJztcbmNvbnN0IENPTkRJVElPTlMgPSAnY29uZGl0aW9ucyc7XG5jb25zdCBBR1JFRU1FTlRfQ09ERSA9ICdjb2RlJztcbmNvbnN0IEFHUkVFTUVOVF9USVRMRSA9ICd0aXRsZSc7XG5jb25zdCBQUk9KRUNUX0NBVEVHT1JZID0gJ3Byb2plY3RfY2F0ZWdvcnknO1xuY29uc3QgUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCA9ICdwcm9qZWN0X2ltcGxlbWVudGluZ191bml0JztcbmNvbnN0IE9SR0FOSVpBVElPTiA9ICdvcmdhbml6YXRpb24nO1xuY29uc3QgUEVSQ0VOVEFHRSA9ICdwZXJjZW50YWdlJztcbmNvbnN0IEFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCA9ICdhbXBfb3JnYW5pemF0aW9uX3JvbGVfaWQnO1xuY29uc3QgUk9MRSA9ICdyb2xlJztcbmNvbnN0IEVYRUNVVElOR19BR0VOQ1kgPSAnZXhlY3V0aW5nX2FnZW5jeSc7XG5jb25zdCBDT05UUkFDVElOR19BR0VOQ1kgPSAnY29udHJhY3RpbmdfYWdlbmN5JztcbmNvbnN0IEJFTkVGSUNJQVJZX0FHRU5DWSA9ICdiZW5lZmljaWFyeV9hZ2VuY3knO1xuY29uc3QgSU1QTEVNRU5USU5HX0FHRU5DWSA9ICdpbXBsZW1lbnRpbmdfYWdlbmN5JztcbmNvbnN0IFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTiA9ICdyZXNwb25zaWJsZV9vcmdhbml6YXRpb24nO1xuY29uc3QgRE9OT1JfT1JHQU5JWkFUSU9OID0gJ2Rvbm9yX29yZ2FuaXphdGlvbic7XG5jb25zdCBSRUdJT05BTF9HUk9VUCA9ICdyZWdpb25hbF9ncm91cCc7XG5jb25zdCBTRUNUT1JfR1JPVVAgPSAnc2VjdG9yX2dyb3VwJztcbmNvbnN0IEJVREdFVFMgPSAnYnVkZ2V0cyc7XG5jb25zdCBCVURHRVRfQ09ERSA9ICdidWRnZXRfY29kZSc7XG5jb25zdCBCVURHRVRfT1JHQU5JWkFUSU9OX0NPREUgPSAnYnVkZ2V0X29yZ2FuaXphdGlvbl9jb2RlJztcbmNvbnN0IEFSQ0hJVkVEID0gJ2FyY2hpdmVkJztcbmNvbnN0IFRSQU5TQUNUSU9OX0RBVEUgPSAndHJhbnNhY3Rpb25fZGF0ZSc7XG5jb25zdCBUUkFOU0FDVElPTl9UWVBFID0gJ3RyYW5zYWN0aW9uX3R5cGUnO1xuY29uc3QgQ09NTUlUTUVOVFMgPSAnY29tbWl0bWVudHMnO1xuY29uc3QgRElTQlVSU0VNRU5UUyA9ICdkaXNidXJzZW1lbnRzJztcbmNvbnN0IEVYUEVORElUVVJFUyA9ICdleHBlbmRpdHVyZXMnO1xuY29uc3QgRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMgPSAnZXN0aW1hdGVkX2Rpc2J1cnNlbWVudHMnO1xuY29uc3QgVFJBTlNBQ1RJT05fQU1PVU5UID0gJ3RyYW5zYWN0aW9uX2Ftb3VudCc7XG5jb25zdCBBREpVU1RNRU5UX1RZUEUgPSAnYWRqdXN0bWVudF90eXBlJztcbmNvbnN0IEFDVFVBTF9TVEFSVF9EQVRFID0gJ2FjdHVhbF9zdGFydF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX1NUQVJUX0RBVEUgPSAncHJvcG9zZWRfc3RhcnRfZGF0ZSc7XG5jb25zdCBBQ1RVQUxfQ09NUExFVElPTl9EQVRFID0gJ2FjdHVhbF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgQ09OVFJBQ1RJTkdfREFURSA9ICdjb250cmFjdGluZ19kYXRlJztcbmNvbnN0IERJU0JVUlNFTUVOVF9EQVRFID0gJ2Rpc2J1cnNlbWVudF9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0FQUFJPVkFMX0RBVEUgPSAncHJvcG9zZWRfYXBwcm92YWxfZGF0ZSc7XG5jb25zdCBPUklHSU5BTF9DT01QTEVUSU9OX0RBVEUgPSAnb3JpZ2luYWxfY29tcGxldGlvbl9kYXRlJztcbmNvbnN0IFBST1BPU0VEX0NPTVBMRVRJT05fREFURSA9ICdwcm9wb3NlZF9jb21wbGV0aW9uX2RhdGUnO1xuY29uc3QgRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyA9ICdmaW5hbF9kYXRlX2Zvcl9kaXNidXJzZW1lbnRzJztcbmNvbnN0IEZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HID0gJ2ZpbmFsX2RhdGVfZm9yX2NvbnRyYWN0aW5nJztcbmNvbnN0IEVGRkVDVElWRV9GVU5ESU5HX0RBVEUgPSAnZWZmZWN0aXZlX2Z1bmRpbmdfZGF0ZSc7XG5jb25zdCBGVU5ESU5HX0NMT1NJTkdfREFURSA9ICdmdW5kaW5nX2Nsb3NpbmdfZGF0ZSc7XG5jb25zdCBSQVRJRklDQVRJT05fREFURSA9ICdyYXRpZmljYXRpb25fZGF0ZSc7XG5jb25zdCBNQVRVUklUWSA9ICdtYXR1cml0eSc7XG5jb25zdCBMQVNUX0FVRElUX0RBVEUgPSAnbGFzdF9hdWRpdF9kYXRlJztcbmNvbnN0IFNJR05BVFVSRV9EQVRFID0gJ3NpZ25hdHVyZV9kYXRlJztcbmNvbnN0IEhVTUFOSVRBUklBTl9BSUQgPSAnaHVtYW5pdGFyaWFuX2FpZCc7XG5jb25zdCBESVNBU1RFUl9SRVNQT05TRSA9ICdkaXNhc3Rlcl9yZXNwb25zZSc7XG5jb25zdCBQUk9HUkFNID0gJ3Byb2dyYW0nO1xuY29uc3QgUFJPR1JBTV9QRVJDRU5UQUdFID0gJ3Byb2dyYW1fcGVyY2VudGFnZSc7XG5jb25zdCBQUk9HUkFNX1NFVFRJTkdTID0gJ3Byb2dyYW1fc2V0dGluZ3MnO1xuY29uc3QgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUgPSAnbmF0aW9uYWxfcGxhbl9vYmplY3RpdmUnO1xuY29uc3QgUFJJTUFSWV9QUk9HUkFNUyA9ICdwcmltYXJ5X3Byb2dyYW1zJztcbmNvbnN0IFNFQ09OREFSWV9QUk9HUkFNUyA9ICdzZWNvbmRhcnlfcHJvZ3JhbXMnO1xuY29uc3QgVEVSVElBUl9QUk9HUkFNUyA9ICd0ZXJ0aWFyeV9wcm9ncmFtcyc7XG5jb25zdCBHT1ZFUk5NRU5UX0FQUFJPVkFMX1BST0NFRFVSRVMgPSAnZ292ZXJubWVudF9hcHByb3ZhbF9wcm9jZWR1cmVzJztcbmNvbnN0IEpPSU5UX0NSSVRFUklBID0gJ2pvaW50X2NyaXRlcmlhJztcbmNvbnN0IFRFQU0gPSAndGVhbSc7XG5jb25zdCBSRUpFQ1RFRF9JRCA9ICdyZWplY3RlZElkJztcbmNvbnN0IElOVEVSTkFMX0lEID0gJ2ludGVybmFsX2lkJztcbmNvbnN0IEFNUF9JRCA9ICdhbXBfaWQnO1xuY29uc3QgUFJPSkVDVF9USVRMRSA9ICdwcm9qZWN0X3RpdGxlJztcbmNvbnN0IERFU0NSSVBUSU9OID0gJ2Rlc2NyaXB0aW9uJztcbmNvbnN0IE1PRElGSUVEX0JZID0gJ21vZGlmaWVkX2J5JztcbmNvbnN0IE1PRElGSUVEX09OID0gJ3VwZGF0ZV9kYXRlJztcbmNvbnN0IENSRUFURURfQlkgPSAnY3JlYXRlZF9ieSc7XG5jb25zdCBDUkVBVEVEX09OID0gJ2NyZWF0aW9uX2RhdGUnO1xuY29uc3QgTEFTVF9JTVBPUlRFRF9CWSA9ICdsYXN0X2ltcG9ydGVkX2J5JztcbmNvbnN0IENMSUVOVF9DSEFOR0VfSUQgPSAnY2xpZW50LWNoYW5nZS1pZCc7XG5jb25zdCBDTElFTlRfQ1JFQVRFRF9PTiA9ICdjbGllbnQtY3JlYXRlZC1vbic7XG5jb25zdCBDTElFTlRfVVBEQVRFRF9PTiA9ICdjbGllbnQtdXBkYXRlZC1vbic7XG5jb25zdCBJU19QVVNIRUQgPSAnaXMtcHVzaGVkJztcbmNvbnN0IEFDVElWSVRZX0dST1VQID0gJ2FjdGl2aXR5X2dyb3VwJztcbmNvbnN0IFZFUlNJT04gPSAndmVyc2lvbic7XG5jb25zdCBQUk9KRUNUX0NPTU1FTlRTID0gJ3Byb2plY3RfY29tbWVudHMnO1xuY29uc3QgTEVTU09OU19MRUFSTkVEID0gJ2xlc3NvbnNfbGVhcm5lZCc7XG5jb25zdCBQUk9KRUNUX0lNUEFDVCA9ICdwcm9qZWN0X2ltcGFjdCc7XG5jb25zdCBBQ1RJVklUWV9TVU1NQVJZID0gJ2FjdGl2aXR5X3N1bW1hcnknO1xuY29uc3QgQ09ORElUSU9OQUxJVElFUyA9ICdjb25kaXRpb25hbGl0aWVzJztcbmNvbnN0IFBST0pFQ1RfTUFOQUdFTUVOVCA9ICdwcm9qZWN0X21hbmFnZW1lbnQnO1xuY29uc3QgQV9DX0NIQVBURVIgPSAnYV9jX2NoYXB0ZXInO1xuY29uc3QgQ1JJU19OVU1CRVIgPSAnY3Jpc19udW1iZXInO1xuY29uc3QgSUFUSV9JREVOVElGSUVSID0gJ2lhdGlfaWRlbnRpZmllcic7XG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFMgPSAnYWN0aXZpdHlfaW50ZXJuYWxfaWRzJztcbmNvbnN0IEhJRVJBUkNISUNBTF9WQUxVRSA9ICdoaWVyYXJjaGljYWxfdmFsdWUnO1xuY29uc3QgSElFUkFSQ0hJQ0FMX1ZBTFVFX1BBUlRTID0gJ2hpZXJhcmNoaWNhbF92YWx1ZV9wYXJ0cyc7XG5jb25zdCBISUVSQVJDSElDQUxfVkFMVUVfREVQVEggPSAnaGllcmFyY2hpY2FsX3ZhbHVlX2RlcHRoJztcbmNvbnN0IFBQQ19BTU9VTlQgPSAncHBjX2Ftb3VudCc7XG5jb25zdCBSUENfQU1PVU5UID0gJ3JwY19hbW91bnQnO1xuY29uc3QgUFBDX0FOTlVBTF9CVURHRVRTID0gJ3BwY19hbm51YWxfYnVkZ2V0cyc7XG5jb25zdCBBTU9VTlQgPSAnYW1vdW50JztcbmNvbnN0IENVUlJFTkNZID0gJ2N1cnJlbmN5JztcbmNvbnN0IEZVTkRJTkdfREFURSA9ICdmdW5kaW5nX2RhdGUnO1xuY29uc3QgQ09NUE9ORU5UUyA9ICdjb21wb25lbnRzJztcbmNvbnN0IFRPVEFMX05VTUJFUl9PRl9GVU5ESU5HX1NPVVJDRVMgPSAndG90YWxfbnVtYmVyX29mX2Z1bmRpbmdfc291cmNlcyc7XG5jb25zdCBTT1VSQ0VfUk9MRSA9ICdzb3VyY2Vfcm9sZSc7XG5jb25zdCBBTVBfRlVORElOR19JRCA9ICdmdW5kaW5nX2lkJztcbmNvbnN0IElTU1VFUyA9ICdpc3N1ZXMnO1xuY29uc3QgSVNTVUVfREFURSA9ICdpc3N1ZV9kYXRlJztcbmNvbnN0IElTU1VFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFUyA9ICdtZWFzdXJlcyc7XG5jb25zdCBNRUFTVVJFX05BTUUgPSAnbmFtZSc7XG5jb25zdCBNRUFTVVJFX0RBVEUgPSAnbWVhc3VyZV9kYXRlJztcbmNvbnN0IEFDVE9SUyA9ICdhY3RvcnMnO1xuY29uc3QgQUNUT1JfTkFNRSA9ICduYW1lJztcbmNvbnN0IFNUUlVDVFVSRVMgPSAnc3RydWN0dXJlcyc7XG5jb25zdCBTVFJVQ1RVUkVTX1RJVExFID0gJ3RpdGxlJztcbmNvbnN0IFNUUlVDVFVSRVNfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgU1RSVUNUVVJFU19MQVRJVFVERSA9ICdsYXRpdHVkZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0xPTkdJVFVERSA9ICdsb25naXR1ZGUnO1xuY29uc3QgU1RSVUNUVVJFU19DT0xPUiA9ICdzdHJ1Y3R1cmVfY29sb3InO1xuY29uc3QgU1RSVUNUVVJFU19MQVQgPSAnbGF0JztcbmNvbnN0IFNUUlVDVFVSRVNfTE5HID0gJ2xuZyc7XG5jb25zdCBTVFJVQ1RVUkVTX1NIQVBFID0gJ3NoYXBlJztcbmNvbnN0IFNUUlVDVFVSRVNfUE9JTlQgPSAnUG9pbnQnO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZR09OID0gJ1BvbHlnb24nO1xuY29uc3QgU1RSVUNUVVJFU19QT0xZTElORSA9ICdQb2x5bGluZSc7XG5jb25zdCBTVFJVQ1RVUkVTX0NPT1JESU5BVEVTID0gJ2Nvb3JkaW5hdGVzJztcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gJ2NvbXBvbmVudF90eXBlJztcbmNvbnN0IENPTVBPTkVOVF9USVRMRSA9ICdjb21wb25lbnRfdGl0bGUnO1xuY29uc3QgQ09NUE9ORU5UX0ZVTkRJTkcgPSAnZnVuZGluZyc7XG5jb25zdCBDT01QT05FTlRfREVTQ1JJUFRJT04gPSAnZGVzY3JpcHRpb24nO1xuY29uc3QgQ09NUE9ORU5UX09SR0FOSVpBVElPTiA9ICdjb21wb25lbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IEZVTkRJTkdfQU1PVU5UX0lEID0gJ2FtcF9mdW5kaW5nX2Ftb3VudF9pZCc7XG5jb25zdCBFWFRSQV9JTkZPID0gJ2V4dHJhX2luZm8nO1xuY29uc3QgVkFMVUUgPSAndmFsdWUnO1xuY29uc3QgQUNST05ZTSA9ICdhY3JvbnltJztcbmNvbnN0IFRZUEVfT0ZfQ09PUEVSQVRJT04gPSAndHlwZV9vZl9jb29wZXJhdGlvbic7XG5jb25zdCBBTk5VQUxfUFJPSkVDVF9CVURHRVRfSUQgPSAnYW5udWFsX3Byb2plY3RfYnVkZ2V0X2lkJztcbmNvbnN0IFRZUEUgPSAndHlwZSc7XG5jb25zdCBZRUFSID0gJ3llYXInO1xuY29uc3QgR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkcgPSAnZ3JvdXBfdmVyc2lvbmVkX2Z1bmRpbmcnO1xuY29uc3QgQUNUSVZFX0xJU1QgPSAnYWN0aXZlX2xpc3QnO1xuY29uc3QgQUNUSVZFID0gJ2FjdGl2ZSc7XG5jb25zdCBERUxFR0FURURfQ09PUEVSQVRJT04gPSAnZGVsZWdhdGVkX2Nvb3BlcmF0aW9uJztcbmNvbnN0IERFTEVHQVRFRF9QQVJUTkVSID0gJ2RlbGVnYXRlZF9wYXJ0bmVyJztcbmNvbnN0IEZJTkFOQ0lOR19JRCA9ICdmaW5hbmNpbmdfaWQnO1xuY29uc3QgRElTQlVSU0VNRU5UX09SREVSX0lEID0gJ2Rpc2J1cnNlbWVudF9vcmRlcl9pZCc7XG5jb25zdCBQTEVER0UgPSAncGxlZGdlJztcbmNvbnN0IENBUElUQUxfU1BFTkRJTkdfUEVSQ0VOVEFHRSA9ICdjYXBpdGFsX3NwZW5kaW5nX3BlcmNlbnRhZ2UnO1xuY29uc3QgUkVQT1JUSU5HX0RBVEUgPSAncmVwb3J0aW5nX2RhdGUnO1xuY29uc3QgUkVDSVBJRU5UX1JPTEUgPSAncmVjaXBpZW50X3JvbGUnO1xuY29uc3QgUkVDSVBJRU5UX09SR0FOSVpBVElPTiA9ICdyZWNpcGllbnRfb3JnYW5pemF0aW9uJztcbmNvbnN0IFRFTVBPUkFMX0lEID0gJ190ZW1wb3JhbF9pZCc7XG5jb25zdCBNSU5JU1RSWV9DT0RFID0gJ21pbmlzdHJ5X2NvZGUnO1xuY29uc3QgUFJPSkVDVF9DT0RFID0gJ3Byb2plY3RfY29kZSc7XG5jb25zdCBGWSA9ICdmeSc7XG5jb25zdCBJTkRJUkVDVF9PTl9CVURHRVQgPSAnaW5kaXJlY3Rfb25fYnVkZ2V0JztcbmNvbnN0IElNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uLWxldmVscyc7XG5jb25zdCBJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPID0gJ2ltcGxlbWVudGF0aW9uX2xvY2F0aW9uX25hbWUnO1xuY29uc3QgRE9OT1JfQ09OVEFDVCA9ICdkb25vcl9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IFBST0pFQ1RfQ09PUkRJTkFUT1JfQ09OVEFDVCA9ICdwcm9qZWN0X2Nvb3JkaW5hdG9yX2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgU0VDVE9SX01JTklTVFJZX0NPTlRBQ1QgPSAnc2VjdG9yX21pbmlzdHJ5X2NvbnRhY3RfaW5mb3JtYXRpb24nO1xuY29uc3QgTU9GRURfQ09OVEFDVCA9ICdtb2ZlZF9jb250YWN0X2luZm9ybWF0aW9uJztcbmNvbnN0IElNUExFTUVOVElOR19FWEVDVVRJTkdfQUdFTkNZX0NPTlRBQ1QgPSAnaW1wbGVtZW50aW5nL2V4ZWN1dGluZ19hZ2VuY3lfY29udGFjdF9pbmZvcm1hdGlvbic7XG5jb25zdCBDT05UQUNUID0gJ2NvbnRhY3QnO1xuY29uc3QgT1JHQU5JWkFUSU9OX0dST1VQID0gJ29yZ2FuaXphdGlvbl9ncm91cCc7XG5jb25zdCBGSVhFRF9FWENIQU5HRV9SQVRFID0gJ2ZpeGVkX2V4Y2hhbmdlX3JhdGUnO1xuY29uc3QgUFJJTUFSWV9DT05UQUNUID0gJ21hcmtfYXNfcHJpbWFyeSc7XG5jb25zdCBBQ1RJVklUWV9ET0NVTUVOVFMgPSAnYWN0aXZpdHlfZG9jdW1lbnRzJztcbmNvbnN0IERPQ1VNRU5UX1RZUEUgPSAnZG9jdW1lbnRfdHlwZSc7XG5jb25zdCBJU08yID0gJ2lzbzInO1xuY29uc3QgTVRFRl9QUk9KRUNUSU9OUyA9ICdtdGVmX3Byb2plY3Rpb25zJztcbmNvbnN0IFBST0pFQ1RJT04gPSAncHJvamVjdGlvbic7XG5jb25zdCBQSVBFTElORSA9ICdwaXBlbGluZSc7XG5jb25zdCBQUk9KRUNUSU9OX0RBVEUgPSAncHJvamVjdGlvbl9kYXRlJztcblxuLy8gQWN0aXZpdHkgbGFiZWxzICh1c3VhbGx5IHRob3NlIHRoYXQgZG9uJ3QgY29tZSBhcyBwYXJ0IG9mIEZpZWxkcyBEZWYgRVApXG5jb25zdCBTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwgPSAnU2FtZSBhcyBQcm9wb3NlZCBTdGFydCBEYXRlJztcbmNvbnN0IFNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCA9ICdTYW1lIGFzIFByb3Bvc2VkIEFwcHJvdmFsIERhdGUnO1xuXG4vLyBBY3Rpdml0eSB2YWxpZGF0aW9uIHJ1bGVzXG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1BSRVNFTlQgPSAnaW1wbGVtZW50YXRpb25fbGV2ZWxfcHJlc2VudCc7XG5jb25zdCBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElEID0gJ2ltcGxlbWVudGF0aW9uX2xldmVsX3ZhbGlkJztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fUFJFU0VOVCA9ICdpbXBsZW1lbnRhdGlvbl9sb2NhdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQgPSAnaW1wbGVtZW50YXRpb25fbG9jYXRpb25fdmFsaWQnO1xuY29uc3QgREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUID0gJ3Byb2plY3RfY29kZV9vbl9idWRnZXQnO1xuY29uc3QgREVQRU5ERU5DWV9PTl9CVURHRVQgPSAnb25fYnVkZ2V0JztcbmNvbnN0IERFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCA9ICd0cmFuc2FjdGlvbl9wcmVzZW50JztcbmNvbnN0IERFUEVOREVOQ1lfQ09NUE9ORU5UX0ZVTkRJTkdfT1JHX1ZBTElEID0gJ29yZ2FuaXphdGlvbl9wcmVzZW50JztcblxuLyoqIElEcyBmb3IgQVAgc2VjdGlvbnMgKiovXG5jb25zdCBBUF9TRUNUSU9OX0lEUyA9XG4gIFt7IGtleTogJ0FQSWRlbnRpZmljYXRpb24nLCBoYXNoOiAnI0FQSWRlbnRpZmljYXRpb24nLCB2YWx1ZTogJ0lkZW50aWZpY2F0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfSURFTlRJRklDQVRJT04gfSxcbiAgICB7IGtleTogJ0FQSW50ZXJuYWxJZHMnLCBoYXNoOiAnI0FQSW50ZXJuYWxJZHMnLCB2YWx1ZTogJ0FnZW5jeSBJbnRlcm5hbCBJRHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfSU5URVJOQUxfSURTIH0sXG4gICAgeyBrZXk6ICdBUFBsYW5uaW5nJywgaGFzaDogJyNBUFBsYW5uaW5nJywgdmFsdWU6ICdQbGFubmluZycsIGZtUGF0aDogRk1DLkFDVElWSVRZX1BMQU5OSU5HIH0sXG4gICAgeyBrZXk6ICdBUExvY2F0aW9uJywgaGFzaDogJyNBUExvY2F0aW9uJywgdmFsdWU6ICdMb2NhdGlvbicsIHNlY3Rpb25QYXRoOiBMT0NBVElPTlMgfSxcbiAgICB7IGtleTogJ0FQUHJvZ3JhbScsIGhhc2g6ICcjQVBQcm9ncmFtJywgdmFsdWU6ICdQcm9ncmFtJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfUFJPR1JBTSB9LFxuICAgIHsga2V5OiAnQVBTZWN0b3InLCBoYXNoOiAnI0FQU2VjdG9yJywgdmFsdWU6ICdTZWN0b3JzJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfU0VDVE9SUyB9LFxuICAgIHtcbiAgICAgIGtleTogJ0FQRnVuZGluZ1NvdXJjZXMnLFxuICAgICAgaGFzaDogJyNBUEZ1bmRpbmdTb3VyY2VzJyxcbiAgICAgIHZhbHVlOiAnRnVuZGluZyBTb3VyY2VzJyxcbiAgICAgIHNlY3Rpb25QYXRoOiBUT1RBTF9OVU1CRVJfT0ZfRlVORElOR19TT1VSQ0VTXG4gICAgfSxcbiAgICB7IGtleTogJ0FQRnVuZGluZycsIGhhc2g6ICcjQVBGdW5kaW5nJywgdmFsdWU6ICdGdW5kaW5nJywgc2VjdGlvblBhdGg6IEZVTkRJTkdTIH0sXG4gICAge1xuICAgICAga2V5OiAnQVBSZWxhdGVkT3JnYW5pemF0aW9ucycsXG4gICAgICBoYXNoOiAnI0FQUmVsYXRlZE9yZ2FuaXphdGlvbnMnLFxuICAgICAgdmFsdWU6ICdSZWxhdGVkIE9yZ2FuaXphdGlvbnMnLFxuICAgICAgZm1QYXRoOiBGTUMuQUNUSVZJVFlfT1JHQU5JWkFUSU9OU1xuICAgIH0sXG4gICAgeyBrZXk6ICdBUElzc3VlcycsIGhhc2g6ICcjQVBJc3N1ZXMnLCB2YWx1ZTogJ0lzc3VlcycsIHNlY3Rpb25QYXRoOiBJU1NVRVMgfSxcbiAgICB7IGtleTogJ0FQQ29udGFjdCcsIGhhc2g6ICcjQVBDb250YWN0JywgdmFsdWU6ICdDb250YWN0IEluZm9ybWF0aW9uJywgZm1QYXRoOiBGTUMuQUNUSVZJVFlfQ09OVEFDVCB9LFxuICAgIHsga2V5OiAnQVBTdHJ1Y3R1cmVzJywgaGFzaDogJyNBUFN0cnVjdHVyZXMnLCB2YWx1ZTogJ1N0cnVjdHVyZXMnLCBzZWN0aW9uUGF0aDogU1RSVUNUVVJFUyB9LFxuICAgIHsga2V5OiAnQVBEb2N1bWVudCcsIGhhc2g6ICcjQVBEb2N1bWVudCcsIHZhbHVlOiAnUmVsYXRlZCBEb2N1bWVudHMnLCBzZWN0aW9uUGF0aDogQUNUSVZJVFlfRE9DVU1FTlRTIH0sXG4gIF07XG5cbi8qKiBDb2x1bW4gY291bnRzIGZvciBlYWNoIHNlY3Rpb24gKiovXG5jb25zdCBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyA9IDM7XG5jb25zdCBBQ1RJVklUWV9QTEFOTklOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0xPQ0FUSU9OX0NPTFMgPSAzO1xuY29uc3QgQUNUSVZJVFlfRlVORElOR19DT0xTID0gMjtcbmNvbnN0IEFDVElWSVRZX0NPTlRBQ1RfQ09MUyA9IDI7XG5jb25zdCBBUF9GVU5ESU5HU19UQUJMRV9DT0xTID0gNDtcblxuY29uc3QgTVVMVElfU0VMRUNUX01JTl9TSVpFID0gODtcbmNvbnN0IE1VTFRJX1NFTEVDVF9NQVhfU0laRSA9IDg7XG5cbi8vIFRPRE86IG1vdmUgdGhlc2UgZnVuY3Rpb25zIHRvIGFuIFV0aWxzIGNsYXNzLlxuY29uc3QgdG9GaWVsZE5hbWVzID0gZnVuY3Rpb24gKGxpc3RPZk5hbWVzKSB7XG4gIHJldHVybiBsaXN0T2ZOYW1lcy5tYXAobmFtZSA9PiB0b0ZpZWxkTmFtZShuYW1lKSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBvcmlnaW5hbCBub24tdHJhbnNsYXRlZCBsYWJlbCB0byBpbnRlcm5hbCBmaWVsZCBuYW1lXG4gKiBAcGFyYW0gbmFtZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5jb25zdCB0b0ZpZWxkTmFtZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGludGVybmFsIGZpZWxkIG5hbWUgdG8gdGhlIE9yaWdpbmFsIG5vbi10cmFuc2xhdGVkIGxhYmVsXG4gKiBAcGFyYW0gZmllbGROYW1lXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHRvT3JpZ2luYWxMYWJlbCA9IGZ1bmN0aW9uIChmaWVsZE5hbWU6IHN0cmluZykge1xuICByZXR1cm4gY2FwaXRhbGl6ZShmaWVsZE5hbWUucmVwbGFjZSgnXycsICcgJykpO1xufTtcblxuLy8gVE9ETzogbW92ZSBhZ2FpbiBpbnNpZGUgYSBzaGFyZWQgVXRpbHMgY2xhc3MgYmVjYXVzZSB0aGlzIGlzIGEgY29weSBmcm9tIFV0aWxzLmpzXG5jb25zdCBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHRleHQ6IHN0cmluZykge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKC8oPzpefFxccylcXFMvZywgY2hhciA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZSh7XG4gIEFDVElWSVRZX0JVREdFVCxcbiAgQUNUSVZJVFlfU1RBVFVTLFxuICBTVEFUVVNfUkVBU09OLFxuICBGSU5BTkNJQUxfSU5TVFJVTUVOVCxcbiAgVFlQRV9PRl9JTVBMRU1FTlRBVElPTixcbiAgT0JKRUNUSVZFLFxuICBSRVNVTFRTLFxuICBCVURHRVRfQ09ERV9QUk9KRUNUX0lELFxuICBBQ1RVQUxfQVBQUk9WQUxfREFURSxcbiAgRlVORElOR1MsXG4gIEZVTkRJTkdfRE9OT1JfT1JHX0lELFxuICBJU19EUkFGVCxcbiAgT1JHX1JPTEVfT1JHX0lELFxuICBBRERJVElPTkFMX0lORk8sXG4gIFBSSU1BUllfU0VDVE9SUyxcbiAgU0VDT05EQVJZX1NFQ1RPUlMsXG4gIFRFUlRJQVJZX1NFQ1RPUlMsXG4gIFRBR19TRUNUT1JTLFxuICBTRUNUT1IsXG4gIFNFQ1RPUl9QRVJDRU5UQUdFLFxuICBGSU5BTkNJTkdfSU5TVFJVTUVOVCxcbiAgTU9EQUxJVElFUyxcbiAgTElORV9NSU5JU1RSWV9SQU5LLFxuICBHT1ZFUk5NRU5UX0FHUkVFTUVOVF9OVU1CRVIsXG4gIEZVTkRJTkdfU1RBVFVTLFxuICBMT0NBVElPTlMsXG4gIExPQ0FUSU9OLFxuICBMT0NBVElPTl9QRVJDRU5UQUdFLFxuICBJTVBMRU1FTlRBVElPTl9MT0NBVElPTixcbiAgSU1QTEVNRU5UQVRJT05fTEVWRUwsXG4gIEFQUFJPVkFMX1NUQVRVUyxcbiAgQVBQUk9WRURfQlksXG4gIEFQUFJPVkFMX0RBVEUsXG4gIFRZUEVfT0ZfQVNTSVNUQU5DRSxcbiAgRVhQRU5ESVRVUkVfQ0xBU1MsXG4gIEZVTkRJTkdfREVUQUlMUyxcbiAgTU9ERV9PRl9QQVlNRU5ULFxuICBGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUsXG4gIEFHUkVFTUVOVCxcbiAgRE9OT1JfT0JKRUNUSVZFLFxuICBDT05ESVRJT05TLFxuICBBR1JFRU1FTlRfQ09ERSxcbiAgQUdSRUVNRU5UX1RJVExFLFxuICBQUk9KRUNUX0NBVEVHT1JZLFxuICBQUk9KRUNUX0lNUExFTUVOVElOR19VTklULFxuICBPUkdBTklaQVRJT04sXG4gIFBFUkNFTlRBR0UsXG4gIEFNUF9PUkdBTklaQVRJT05fUk9MRV9JRCxcbiAgUk9MRSxcbiAgRVhFQ1VUSU5HX0FHRU5DWSxcbiAgQ09OVFJBQ1RJTkdfQUdFTkNZLFxuICBCRU5FRklDSUFSWV9BR0VOQ1ksXG4gIElNUExFTUVOVElOR19BR0VOQ1ksXG4gIFJFU1BPTlNJQkxFX09SR0FOSVpBVElPTixcbiAgRE9OT1JfT1JHQU5JWkFUSU9OLFxuICBSRUdJT05BTF9HUk9VUCxcbiAgU0VDVE9SX0dST1VQLFxuICBCVURHRVRTLFxuICBCVURHRVRfQ09ERSxcbiAgQlVER0VUX09SR0FOSVpBVElPTl9DT0RFLFxuICBBUkNISVZFRCxcbiAgVFJBTlNBQ1RJT05fREFURSxcbiAgVFJBTlNBQ1RJT05fVFlQRSxcbiAgQ09NTUlUTUVOVFMsXG4gIERJU0JVUlNFTUVOVFMsXG4gIEVYUEVORElUVVJFUyxcbiAgRVNUSU1BVEVEX0RJU0JVUlNFTUVOVFMsXG4gIFRSQU5TQUNUSU9OX0FNT1VOVCxcbiAgQURKVVNUTUVOVF9UWVBFLFxuICBBQ1RVQUxfU1RBUlRfREFURSxcbiAgUFJPUE9TRURfU1RBUlRfREFURSxcbiAgQUNUVUFMX0NPTVBMRVRJT05fREFURSxcbiAgQ09OVFJBQ1RJTkdfREFURSxcbiAgRElTQlVSU0VNRU5UX0RBVEUsXG4gIFBST1BPU0VEX0FQUFJPVkFMX0RBVEUsXG4gIE9SSUdJTkFMX0NPTVBMRVRJT05fREFURSxcbiAgUFJPUE9TRURfQ09NUExFVElPTl9EQVRFLFxuICBGSU5BTF9EQVRFX0ZPUl9ESVNCVVJTRU1FTlRTLFxuICBGSU5BTF9EQVRFX0ZPUl9DT05UUkFDVElORyxcbiAgRUZGRUNUSVZFX0ZVTkRJTkdfREFURSxcbiAgRlVORElOR19DTE9TSU5HX0RBVEUsXG4gIFJBVElGSUNBVElPTl9EQVRFLFxuICBNQVRVUklUWSxcbiAgTEFTVF9BVURJVF9EQVRFLFxuICBTSUdOQVRVUkVfREFURSxcbiAgSFVNQU5JVEFSSUFOX0FJRCxcbiAgRElTQVNURVJfUkVTUE9OU0UsXG4gIFBST0dSQU0sXG4gIFBST0dSQU1fUEVSQ0VOVEFHRSxcbiAgUFJPR1JBTV9TRVRUSU5HUyxcbiAgTkFUSU9OQUxfUExBTl9PQkpFQ1RJVkUsXG4gIFBSSU1BUllfUFJPR1JBTVMsXG4gIFNFQ09OREFSWV9QUk9HUkFNUyxcbiAgVEVSVElBUl9QUk9HUkFNUyxcbiAgR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTLFxuICBKT0lOVF9DUklURVJJQSxcbiAgVEVBTSxcbiAgUkVKRUNURURfSUQsXG4gIElOVEVSTkFMX0lELFxuICBBTVBfSUQsXG4gIFBST0pFQ1RfVElUTEUsXG4gIERFU0NSSVBUSU9OLFxuICBNT0RJRklFRF9CWSxcbiAgTU9ESUZJRURfT04sXG4gIENSRUFURURfQlksXG4gIENSRUFURURfT04sXG4gIExBU1RfSU1QT1JURURfQlksXG4gIENMSUVOVF9DSEFOR0VfSUQsXG4gIENMSUVOVF9DUkVBVEVEX09OLFxuICBDTElFTlRfVVBEQVRFRF9PTixcbiAgSVNfUFVTSEVELFxuICBBQ1RJVklUWV9HUk9VUCxcbiAgVkVSU0lPTixcbiAgUFJPSkVDVF9DT01NRU5UUyxcbiAgTEVTU09OU19MRUFSTkVELFxuICBQUk9KRUNUX0lNUEFDVCxcbiAgQUNUSVZJVFlfU1VNTUFSWSxcbiAgQ09ORElUSU9OQUxJVElFUyxcbiAgUFJPSkVDVF9NQU5BR0VNRU5ULFxuICBBX0NfQ0hBUFRFUixcbiAgQ1JJU19OVU1CRVIsXG4gIElBVElfSURFTlRJRklFUixcbiAgQUNUSVZJVFlfSU5URVJOQUxfSURTLFxuICBISUVSQVJDSElDQUxfVkFMVUUsXG4gIEhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyxcbiAgSElFUkFSQ0hJQ0FMX1ZBTFVFX0RFUFRILFxuICBQUENfQU1PVU5ULFxuICBSUENfQU1PVU5ULFxuICBQUENfQU5OVUFMX0JVREdFVFMsXG4gIEFNT1VOVCxcbiAgQ1VSUkVOQ1ksXG4gIEZVTkRJTkdfREFURSxcbiAgQ09NUE9ORU5UUyxcbiAgVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyxcbiAgU09VUkNFX1JPTEUsXG4gIEFNUF9GVU5ESU5HX0lELFxuICBJU1NVRVMsXG4gIElTU1VFX0RBVEUsXG4gIElTU1VFX05BTUUsXG4gIE1FQVNVUkVTLFxuICBNRUFTVVJFX05BTUUsXG4gIE1FQVNVUkVfREFURSxcbiAgQUNUT1JTLFxuICBBQ1RPUl9OQU1FLFxuICBTVFJVQ1RVUkVTLFxuICBTVFJVQ1RVUkVTX1RJVExFLFxuICBTVFJVQ1RVUkVTX0RFU0NSSVBUSU9OLFxuICBTVFJVQ1RVUkVTX0xBVElUVURFLFxuICBTVFJVQ1RVUkVTX0xPTkdJVFVERSxcbiAgU1RSVUNUVVJFU19DT0xPUixcbiAgU1RSVUNUVVJFU19MQVQsXG4gIFNUUlVDVFVSRVNfTE5HLFxuICBTVFJVQ1RVUkVTX1NIQVBFLFxuICBTVFJVQ1RVUkVTX1BPSU5ULFxuICBTVFJVQ1RVUkVTX1BPTFlHT04sXG4gIFNUUlVDVFVSRVNfUE9MWUxJTkUsXG4gIFNUUlVDVFVSRVNfQ09PUkRJTkFURVMsXG4gIENPTVBPTkVOVF9UWVBFLFxuICBDT01QT05FTlRfVElUTEUsXG4gIENPTVBPTkVOVF9GVU5ESU5HLFxuICBDT01QT05FTlRfREVTQ1JJUFRJT04sXG4gIENPTVBPTkVOVF9PUkdBTklaQVRJT04sXG4gIEZVTkRJTkdfQU1PVU5UX0lELFxuICBFWFRSQV9JTkZPLFxuICBWQUxVRSxcbiAgQUNST05ZTSxcbiAgVFlQRV9PRl9DT09QRVJBVElPTixcbiAgQU5OVUFMX1BST0pFQ1RfQlVER0VUX0lELFxuICBUWVBFLFxuICBZRUFSLFxuICBHUk9VUF9WRVJTSU9ORURfRlVORElORyxcbiAgQUNUSVZFX0xJU1QsXG4gIEFDVElWRSxcbiAgREVMRUdBVEVEX0NPT1BFUkFUSU9OLFxuICBERUxFR0FURURfUEFSVE5FUixcbiAgRklOQU5DSU5HX0lELFxuICBESVNCVVJTRU1FTlRfT1JERVJfSUQsXG4gIFBMRURHRSxcbiAgQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFLFxuICBSRVBPUlRJTkdfREFURSxcbiAgUkVDSVBJRU5UX1JPTEUsXG4gIFJFQ0lQSUVOVF9PUkdBTklaQVRJT04sXG4gIFRFTVBPUkFMX0lELFxuICBNSU5JU1RSWV9DT0RFLFxuICBQUk9KRUNUX0NPREUsXG4gIEZZLFxuICBJTkRJUkVDVF9PTl9CVURHRVQsXG4gIElNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPLFxuICBJTVBMRU1FTlRBVElPTl9MT0NBVElPTl9FWFRSQV9JTkZPLFxuICBET05PUl9DT05UQUNULFxuICBQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QsXG4gIFNFQ1RPUl9NSU5JU1RSWV9DT05UQUNULFxuICBNT0ZFRF9DT05UQUNULFxuICBJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNULFxuICBDT05UQUNULFxuICBPUkdBTklaQVRJT05fR1JPVVAsXG4gIEZJWEVEX0VYQ0hBTkdFX1JBVEUsXG4gIFBSSU1BUllfQ09OVEFDVCxcbiAgQUNUSVZJVFlfRE9DVU1FTlRTLFxuICBET0NVTUVOVF9UWVBFLFxuICBJU08yLFxuICBNVEVGX1BST0pFQ1RJT05TLFxuICBQUk9KRUNUSU9OLFxuICBQSVBFTElORSxcbiAgUFJPSkVDVElPTl9EQVRFLFxuICBTQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEVfTEFCRUwsXG4gIFNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCxcbiAgREVQRU5ERU5DWV9JTVBMRU1FTlRBVElPTl9MRVZFTF9QUkVTRU5ULFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xFVkVMX1ZBTElELFxuICBERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQsXG4gIERFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fVkFMSUQsXG4gIERFUEVOREVOQ1lfUFJPSkVDVF9DT0RFX09OX0JVREdFVCxcbiAgREVQRU5ERU5DWV9PTl9CVURHRVQsXG4gIERFUEVOREVOQ1lfVFJBTlNBQ1RJT05fUFJFU0VOVCxcbiAgREVQRU5ERU5DWV9DT01QT05FTlRfRlVORElOR19PUkdfVkFMSUQsXG4gIEFQX1NFQ1RJT05fSURTLFxuICBBQ1RJVklUWV9JTlRFUk5BTF9JRFNfQ09MUyxcbiAgQUNUSVZJVFlfUExBTk5JTkdfQ09MUyxcbiAgQUNUSVZJVFlfTE9DQVRJT05fQ09MUyxcbiAgQUNUSVZJVFlfRlVORElOR19DT0xTLFxuICBBQ1RJVklUWV9DT05UQUNUX0NPTFMsXG4gIEFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMsXG4gIE1VTFRJX1NFTEVDVF9NSU5fU0laRSxcbiAgTVVMVElfU0VMRUNUX01BWF9TSVpFLFxuICB0b0ZpZWxkTmFtZXMsXG4gIHRvRmllbGROYW1lLFxuICB0b09yaWdpbmFsTGFiZWwsXG4gIGNhcGl0YWxpemVcbn0pO1xuIiwiY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFknO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fQVBJX1NZTkNVUCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TWU5DVVAnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRBQkFTRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OID0gJ05PVElGSUNBVElPTl9PUklHSU5fQVVUSEVOVElDQVRJT04nO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSID0gJ05PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFX0ZJTFRFUic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTID0gJ05PVElGSUNBVElPTl9PUklHSU5fU1lOQ1VQX1BST0NFU1MnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSID0gJ05PVElGSUNBVElPTl9PUklHSU5fQ1VSUkVOQ1lfTUFOQUdFUic7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEVTID0gJ05PVElGSUNBVElPTl9PUklHSU5fREFURVMnO1xuY29uc3QgTk9USUZJQ0FUSU9OX09SSUdJTl9BQ1RJVklUWSA9ICdOT1RJRklDQVRJT05fT1JJR0lOX0FDVElWSVRZJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9SRVNPVVJDRSc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX0kxOE5FWFQgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLID0gJ05PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFX0NIRUNLJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFID0gJ05PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFJztcbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAgPSAnTk9USUZJQ0FUSU9OX09SSUdJTl9TRVRVUCc7XG5jb25zdCBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTID0gJ05PVElGSUNBVElPTl9PUklHSU5fU0VUVElOR1MnO1xuXG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfV0FSTklORyc7XG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyA9ICdOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyc7XG5jb25zdCBOT1RJRklDQVRJT05fU0VWRVJJVFlfRVJST1IgPSAnTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SJztcblxuY29uc3QgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX01JTk9SID0gJ05PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUic7XG5jb25zdCBOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUiA9ICdOT1RJRklDQVRJT05fRVJST1JfTEVWRUxfQkxPQ0tFUic7XG5cbmNvbnN0IE5PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFID0gJ05PVElGSUNBVElPTl9PUklHSU5fV1JPTkdfTUVUSE9EX1VTQUdFJztcblxuY29uc3QgRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFkgPSAnTk9fQ09OTkVDVElWSVRZJztcbmNvbnN0IEVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCA9ICdBQ0NFU1NfREVOSUVEJztcblxuXG5jb25zdCBNU0dfSU5WQUxJRF9VUkwgPSAnaW52YWxpZFVybCc7XG5jb25zdCBNU0dfVElNRU9VVCA9ICd0aW1lb3V0RXJyb3InO1xuY29uc3QgTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiA9ICd1bmtub3duTmV0d29ya0Vycm9yJztcbmNvbnN0IE1TR19BTVBfVU5SRUFDSEFCTEUgPSAnQU1QVW5yZWFjaGFibGVFcnJvcic7XG5jb25zdCBHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTID0gW01TR19JTlZBTElEX1VSTCwgTVNHX1RJTUVPVVQsIE1TR19VTktOT1dOX05FVFdPUktfRVJST1IsIE1TR19BTVBfVU5SRUFDSEFCTEVdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9TRUNVUklUWSxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfTkVUV09SSyxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9HRU5FUkFMLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0RBVEFCQVNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1dPUktTUEFDRV9GSUxURVIsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fV09SS1NQQUNFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVIsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fREFURVMsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFksXG4gIE5PVElGSUNBVElPTl9PUklHSU5fUkVTT1VSQ0UsXG4gIE5PVElGSUNBVElPTl9PUklHSU5fSTE4TkVYVCxcbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0ssXG4gIE5PVElGSUNBVElPTl9PUklHSU5fVVBEQVRFLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFVQLFxuICBOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTLFxuXG4gIE5PVElGSUNBVElPTl9TRVZFUklUWV9XQVJOSU5HLFxuICBOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyxcbiAgTk9USUZJQ0FUSU9OX1NFVkVSSVRZX0VSUk9SLFxuXG4gIE5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUixcbiAgTk9USUZJQ0FUSU9OX0VSUk9SX0xFVkVMX0JMT0NLRVIsXG5cbiAgTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UsXG5cbiAgRVJST1JfQ09ERV9OT19DT05ORUNUSVZJVFksXG4gIEVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCxcblxuXG4gIE1TR19JTlZBTElEX1VSTCxcbiAgTVNHX1RJTUVPVVQsXG4gIE1TR19VTktOT1dOX05FVFdPUktfRVJST1IsXG4gIE1TR19BTVBfVU5SRUFDSEFCTEUsXG4gIEdFTkVSQUxfQ09OTkVDVElPTl9FUlJPUlNcbn0pXG47XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgQWN0aXZpdHlDb25zdGFudHMgZnJvbSAnLi4vdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRXJyb3JDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvQ29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVuY3lSYXRlc01hbmFnZXIge1xuICBjb25zdHJ1Y3RvcihjdXJyZW5jeVJhdGVzLCBiYXNlQ3VycmVuY3ksIHRyYW5zbGF0ZSwgZGF0ZVV0aWxzLCBlcnJvck5vdGlmaWNhdGlvbkhlbHBlcikge1xuICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMgPSBjdXJyZW5jeVJhdGVzO1xuICAgIHRoaXMuX2Jhc2VDdXJyZW5jeSA9IGJhc2VDdXJyZW5jeTtcbiAgICB0aGlzLl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcyA9IHRoaXMuX2dldEN1cnJlbmNpZXNXaXRoRXhjaGFuZ2VSYXRlcygpO1xuICAgIHRoaXMuX3RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcbiAgICB0aGlzLl9kYXRlVXRpbHMgPSBkYXRlVXRpbHM7XG4gICAgdGhpcy5fZXJyb3JOb3RpZmljYXRpb25IZWxwZXIgPSBlcnJvck5vdGlmaWNhdGlvbkhlbHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgb2YgY3VycmVuY2llcyB0aGF0IGhhcyBhdCBsZWFzdCBvbmUgZXhjaGFuZ2UgcmF0ZVxuICAgKiBAcmV0dXJuIHtTZXQ8YW55PiB8ICp9XG4gICAqL1xuICBnZXQgY3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJybmNpZXNXaXRoRXhjaGFuZ2VSYXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXJyZW5jeSBjb252ZXJzaW9uIHV0aWxpdHkuIElmIHdlIGhhdmUgdGhlIGRpcmVjdCByYXRlIGl0IHdpbGwgY29udmVydCBmcm9tIGN1cnJlbmN5RnJvbSB0byBjdXJyZW5jeVRvIGluIHRoZVxuICAgKiBnaXZlbiBkYXRlLiBJZiB3ZSBkb24ndCBoYXZlIHRoZSBzYWlkIGN1cnJlbmN5IGl0IHdpbGwgdHJ5IHRvIHNlYXJjaCB0aGUgaW52ZXJzZSByYXRlIGFuZCB1c2UgMS94LiBJZiB0aGUgaW52ZXJzZVxuICAgKiByYXRlIGlzIGFsc28gbm90IEF2YWlsYWJsZSBhbiBlcnJvciB3aWxsIGJlIHRocm93blxuICAgKiBAcGFyYW0gY3VycmVuY3lGcm9tIGN1cnJlbmN5IGNvZGUgZnJvbSB0aGUgY3VycmVuY3kgd2UgYXJlIGNvbnZlcnRpbmcgZnJvbVxuICAgKiBAcGFyYW0gY3VycmVuY3lUbyBjdXJyZW5jeSBjb2RlIGZyb20gdGhlIGN1cnJlbmN5IHdlIGFyZSBjb252ZXJ0aW5nIHRvXG4gICAqIEBwYXJhbSBkYXRlVG9GaW5kIGRhdGUgZm9yIHdoaWNoIHdlIGFyZSBkb2luZyB0aGUgY29udmVyc2lvbi4gSXQgaXMgZXhwZWN0ZWQgaW4geXl5eS1tbS1kZFxuICAgKiBAcmV0dXJucyB7KnxQcm9taXNlLjxUUmVzdWx0Pn1cbiAgICovXG4gIGNvbnZlcnRDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIGRhdGVUb0ZpbmQsIGZpeGVkRXhjaGFuZ2VSYXRlKSB7XG4gICAgaWYgKGN1cnJlbmN5RnJvbSA9PT0gY3VycmVuY3lUbykge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5SQVRFX1NBTUVfQ1VSUkVOQ1k7XG4gICAgfVxuICAgIGlmIChmaXhlZEV4Y2hhbmdlUmF0ZSAmJiBmaXhlZEV4Y2hhbmdlUmF0ZSA+IDApIHtcbiAgICAgIHJldHVybiAodGhpcy5jb252ZXJ0Q3VycmVuY3kodGhpcy5fYmFzZUN1cnJlbmN5LCBjdXJyZW5jeVRvLCBkYXRlVG9GaW5kLCBudWxsKSAvXG4gICAgICAgIGZpeGVkRXhjaGFuZ2VSYXRlKTtcbiAgICB9XG4gICAgY29uc3QgdGltZURhdGVUb0ZpbmQgPSAobmV3IERhdGUoYCR7ZGF0ZVRvRmluZH0gJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSkuZ2V0VGltZSgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW5jeVJhdGVzKSB7XG4gICAgICBjb25zdCBjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IGN1cnJlbmN5RnJvbSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT0gY3VycmVuY3lUb1xuICAgICAgKTtcbiAgICAgIGlmIChjdXJyZW5jaWVzVG9TZWFyY2hEaXJlY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCwgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGlyZWN0IG5vdCBmb3VuZFxuICAgICAgICBjb25zdCBjdXJyZW5jaWVzVG9TZWFyY2hJbnZlcnNlID1cbiAgICAgICAgICB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeVRvICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICAgICAgY3VycmVuY3lGcm9tKTtcbiAgICAgICAgaWYgKGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UpIHtcbiAgICAgICAgICByZXR1cm4gMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKGN1cnJlbmNpZXNUb1NlYXJjaEludmVyc2UsIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VmlhQmFzZUN1cnJlbmN5KGN1cnJlbmN5RnJvbSwgY3VycmVuY3lUbywgdGltZURhdGVUb0ZpbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHRoaXMuX2dldEN1cnJlbmN5RXJyb3IoJ0N1cnJlbmN5UmF0ZXNOb3RJbml0aWFsaXplZCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRGdW5kaW5nRGV0YWlsc1RvQ3VycmVuY3koZnVuZGluZ0RldGFpbHMsIGN1cnJlbmN5VG8pIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZ1bmRpbmdEZXRhaWxzLmZvckVhY2goZmQgPT4ge1xuICAgICAgdG90YWwgKz0gdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZkLCBjdXJyZW5jeVRvKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGNvbnZlcnRUcmFuc2FjdGlvbkFtb3VudFRvQmFzZUN1cnJlbmN5KGZ1bmRpbmdEZXRhaWwpIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWwsIHRoaXMuX2Jhc2VDdXJyZW5jeSk7XG4gIH1cblxuICBjb252ZXJ0QW1vdW50VG9DdXJyZW5jeShhbW91bnQsIGN1cnJlbmN5RnJvbSwgZGF0ZSwgZml4ZWRFeGNoYW5nZVJhdGUsIGN1cnJlbmN5VG8pIHtcbiAgICBjb25zdCBjdXJyZW5jeVJhdGUgPSB0aGlzLmNvbnZlcnRDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sXG4gICAgICB0aGlzLl9kYXRlVXRpbHMuZm9ybWF0RGF0ZUZvckFQSShkYXRlKSwgZml4ZWRFeGNoYW5nZVJhdGUpO1xuICAgIHJldHVybiBhbW91bnQgKiBjdXJyZW5jeVJhdGU7XG4gIH1cblxuICBjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5KGZ1bmRpbmdEZXRhaWwsIGN1cnJlbmN5VG8pIHtcbiAgICBjb25zdCBmaXhlZEV4Y2hhbmdlUmF0ZSA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuRklYRURfRVhDSEFOR0VfUkFURV07XG4gICAgY29uc3QgY3VycmVuY3lGcm9tID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5DVVJSRU5DWV0udmFsdWU7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25EYXRlID0gZnVuZGluZ0RldGFpbFtBY3Rpdml0eUNvbnN0YW50cy5UUkFOU0FDVElPTl9EQVRFXTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkFtb3VudCA9IGZ1bmRpbmdEZXRhaWxbQWN0aXZpdHlDb25zdGFudHMuVFJBTlNBQ1RJT05fQU1PVU5UXTtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0QW1vdW50VG9DdXJyZW5jeSh0cmFuc2FjdGlvbkFtb3VudCwgY3VycmVuY3lGcm9tLCB0cmFuc2FjdGlvbkRhdGUsIGZpeGVkRXhjaGFuZ2VSYXRlLFxuICAgICAgY3VycmVuY3lUbyk7XG4gIH1cblxuICBnZXRFeGNoYW5nZVJhdGUoY3VycmVuY2llc1RvU2VhcmNoLCB0aW1lRGF0ZVRvRmluZCkge1xuICAgIGxldCBsb3dlckVuZCA9IDA7XG4gICAgbGV0IGhpZ2hlckVuZCA9IGN1cnJlbmNpZXNUb1NlYXJjaC5yYXRlcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChsb3dlckVuZCA8IGhpZ2hlckVuZCkge1xuICAgICAgY29uc3QgbWlkZGxlID0gTWF0aC5mbG9vcigobG93ZXJFbmQgKyBoaWdoZXJFbmQpIC8gMik7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMoKG5ldyBEYXRlKFxuICAgICAgICBgJHtjdXJyZW5jaWVzVG9TZWFyY2gucmF0ZXNbbWlkZGxlXS5kYXRlfSAgJHtDb25zdGFudHMuQ1VSUkVOQ1lfSE9VUn1gKSlcbiAgICAgICAgLSB0aW1lRGF0ZVRvRmluZCk7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlMSA9IE1hdGguYWJzKChuZXcgRGF0ZShcbiAgICAgICAgYCR7Y3VycmVuY2llc1RvU2VhcmNoLnJhdGVzW21pZGRsZSArIDFdLmRhdGV9ICAke0NvbnN0YW50cy5DVVJSRU5DWV9IT1VSfWApKVxuICAgICAgICAtIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIGlmIChkaWZmZXJlbmNlMSA8PSBkaWZmZXJlbmNlKSB7XG4gICAgICAgIGxvd2VyRW5kID0gbWlkZGxlICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZ2hlckVuZCA9IG1pZGRsZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbmNpZXNUb1NlYXJjaC5yYXRlc1toaWdoZXJFbmRdLnJhdGU7XG4gIH1cblxuICBfZ2V0Q3VycmVuY3lFcnJvcihlcnJvck1lc2FnZSkge1xuICAgIGNvbnN0IG5vdGlmRXJyb3JDdXJyZW5jeSA9IHRoaXMuX2Vycm9yTm90aWZpY2F0aW9uSGVscGVyLmNyZWF0ZU5vdGlmaWNhdGlvbih7XG4gICAgICBtZXNzYWdlOiB0aGlzLl90cmFuc2xhdGUoZXJyb3JNZXNhZ2UpLFxuICAgICAgb3JpZ2luOiBFcnJvckNvbnN0YW50cy5OT1RJRklDQVRJT05fT1JJR0lOX0NVUlJFTkNZX01BTkFHRVJcbiAgICB9KTtcbiAgICByZXR1cm4gbm90aWZFcnJvckN1cnJlbmN5O1xuICB9XG5cbiAgY29udmVydFZpYUJhc2VDdXJyZW5jeShjdXJyZW5jeUZyb20sIGN1cnJlbmN5VG8sIHRpbWVEYXRlVG9GaW5kKSB7XG4gICAgY29uc3QgcmF0ZUZyb21Ub0Jhc2UgPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeUZyb20gJiYgaXRlbVtDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8gPT09XG4gICAgICB0aGlzLl9iYXNlQ3VycmVuY3lcbiAgICApO1xuICAgIGNvbnN0IHJhdGVCYXNlVG9UbyA9IHRoaXMuX2N1cnJlbmN5UmF0ZXMuZmluZCgoaXRlbSkgPT5cbiAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IHRoaXMuX2Jhc2VDdXJyZW5jeSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgIGN1cnJlbmN5VG9cbiAgICApO1xuICAgIGlmIChyYXRlRnJvbVRvQmFzZSAmJiByYXRlQmFzZVRvVG8pIHtcbiAgICAgIC8vIGlmIHdlIGhhdmUgYm90aCBjdXJyZW5jaWVzIHdlIGp1c3QgcmV0dXJuIHRoZSBwcm9kdWN0IG9mIGVjaCByYXRlXG4gICAgICByZXR1cm4gdGhpcy5nZXRFeGNoYW5nZVJhdGUocmF0ZUZyb21Ub0Jhc2UsIHRpbWVEYXRlVG9GaW5kKSAqIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9UbywgdGltZURhdGVUb0ZpbmQpO1xuICAgIH0gZWxzZSBpZiAocmF0ZUZyb21Ub0Jhc2UpIHtcbiAgICAgIC8vIGlmIGVpdGhlciBvZiB0aGVtIGlzIG5vdCBmb3VuZCB3ZSB0cnkgdG8gZmluZCB0aGUgaW52ZXJzZVxuICAgICAgLy8gd2UgZ2V0IHRoZSBpbnZlcnNlIG9mIHJhdGVCYXNlVG9Ub1xuICAgICAgY29uc3QgcmF0ZVRvVG9CYXNlID0gdGhpcy5fY3VycmVuY3lSYXRlcy5maW5kKChpdGVtKSA9PlxuICAgICAgICBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS5mcm9tID09PSBjdXJyZW5jeVRvICYmIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLnRvID09PVxuICAgICAgICB0aGlzLl9iYXNlQ3VycmVuY3lcbiAgICAgICk7XG4gICAgICBpZiAocmF0ZVRvVG9CYXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlRnJvbVRvQmFzZSwgdGltZURhdGVUb0ZpbmQpXG4gICAgICAgICAgKiAoMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVUb1RvQmFzZSwgdGltZURhdGVUb0ZpbmQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJhdGVCYXNlVG9Ubykge1xuICAgICAgY29uc3QgcmF0ZUJhc2VUb0Zyb20gPSB0aGlzLl9jdXJyZW5jeVJhdGVzLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgIGl0ZW1bQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20gPT09IHRoaXMuX2Jhc2VDdXJyZW5jeSAmJiBpdGVtW0NvbnN0YW50cy5DVVJSRU5DWV9QQUlSXS50byA9PT1cbiAgICAgICAgY3VycmVuY3lGcm9tXG4gICAgICApO1xuICAgICAgLy8gd2UgdHJ5IHRvIGdldCB0aGUgaW52ZXJzZSBvZiByYXRlRnJvbVRvQmFzZVxuICAgICAgaWYgKHJhdGVCYXNlVG9Gcm9tKSB7XG4gICAgICAgIHJldHVybiAoMSAvIHRoaXMuZ2V0RXhjaGFuZ2VSYXRlKHJhdGVCYXNlVG9Gcm9tLCB0aW1lRGF0ZVRvRmluZCkpXG4gICAgICAgICAgKiB0aGlzLmdldEV4Y2hhbmdlUmF0ZShyYXRlQmFzZVRvVG8sIHRpbWVEYXRlVG9GaW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFcnJvckNvbnN0YW50cy5SQVRFX0NVUlJFTkNZX05PVF9GT1VORDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVycm9yQ29uc3RhbnRzLlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRDdXJyZW5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMoKSB7XG4gICAgY29uc3QgY3MgPSBuZXcgU2V0KCk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbmN5UmF0ZXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbmN5UmF0ZXMuZm9yRWFjaChleGNoYW5nZVJhdGVzID0+IHtcbiAgICAgICAgY3MuYWRkKGV4Y2hhbmdlUmF0ZXNbQ29uc3RhbnRzLkNVUlJFTkNZX1BBSVJdLmZyb20pO1xuICAgICAgICBjcy5hZGQoZXhjaGFuZ2VSYXRlc1tDb25zdGFudHMuQ1VSUkVOQ1lfUEFJUl0udG8pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjcztcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuLy8gaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlck1hbmFnZXInO1xuXG4vLyBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdGZWF0dXJlIG1hbmFnZXInKTtcbmNvbnN0IEZFQVRVUkVfTUFOQUdFUiA9ICdGZWF0dXJlIG1hbmFnZXInO1xuXG4vKipcbiAqIEZlYXR1cmUgTWFuYWdlclxuICogQGF1dGhvciBOYWRlamRhIE1hbmRyZXNjdVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWF0dXJlTWFuYWdlciB7XG4gIHN0YXRpYyBfY3VycmVudEZNID0gbmV3IEZlYXR1cmVNYW5hZ2VyKCk7XG5cbiAgY29uc3RydWN0b3IoZm1UcmVlLCBMb2dnZXJNYW5hZ2VyKSB7XG4gICAgdGhpcy5fZm1UcmVlID0gZm1UcmVlO1xuICAgIHRoaXMuX2xvZ2dlck1hbmFnZXIgPSBuZXcgTG9nZ2VyTWFuYWdlcihGRUFUVVJFX01BTkFHRVIpO1xuICB9XG5cbiAgc2V0IGZtVHJlZShmbVRyZWUpIHtcbiAgICB0aGlzLl9mbVRyZWUgPSBmbVRyZWU7XG4gIH1cblxuICBzZXQgbG9nZ2VyTWFuYWdlcihMb2dnZXJNYW5hZ2VyKSB7XG4gICAgdGhpcy5fbG9nZ2VyTWFuYWdlciA9IG5ldyBMb2dnZXJNYW5hZ2VyKEZFQVRVUkVfTUFOQUdFUik7XG4gIH1cblxuICBzdGF0aWMgc2V0TG9nZ2VyTWFuYWdlcihMb2dnZXJNYW5hZ2VyKSB7XG4gICAgRmVhdHVyZU1hbmFnZXIuX2N1cnJlbnRGTS5fbG9nZ2VyTWFuYWdlciA9IG5ldyBMb2dnZXJNYW5hZ2VyKEZFQVRVUkVfTUFOQUdFUik7XG4gIH1cbiAgc3RhdGljIHNldEZNVHJlZShmbVRyZWUpIHtcbiAgICBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmZtVHJlZSA9IGZtVHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIEZNIHBhdGggaXMgZnVsbHkgZW5hYmxlZCBvciBvbmx5IGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkXG4gICAqIEBwYXJhbSBmbVBhdGggdGhlIEZNIHBhdGgsIGUuZy4gJy9QUk9KRUNUIE1BTkFHRU1FTlQvRnVuZGluZy9GdW5kaW5nIEluZm9ybWF0aW9uL0RlbGl2ZXJ5IHJhdGUnXG4gICAqIEBwYXJhbSBvbmx5TGFzdFNlZ21lbnQgc3BlY2lmaWVzIGlmIHRvIGNoZWNrIGlmIG9ubHkgdGhlIGxhc3Qgc2VnbWVudCBpcyBlbmFibGVkICh0aGUgQU1QIGJlaGF2aW9yIGZvciBzb21lIGNhc2VzKVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmlzRk1TZXR0aW5nRW5hYmxlZChmbVBhdGgsIG9ubHlMYXN0U2VnbWVudCk7XG4gIH1cblxuICBzdGF0aWMgaGFzRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIHJldHVybiBGZWF0dXJlTWFuYWdlci5fY3VycmVudEZNLmhhc0ZNU2V0dGluZyhmbVBhdGgpO1xuICB9XG5cbiAgaXNGTVNldHRpbmdFbmFibGVkKGZtUGF0aCwgb25seUxhc3RTZWdtZW50KSB7XG4gICAgdGhpcy5fbG9nZ2VyTWFuYWdlci5kZWJ1ZygnaXNGTVNldHRpbmdFbmFibGVkJyk7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgbGV0IGxhc3RGTVN1YlRyZWUgPSB0aGlzLl9mbVRyZWU7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpO1xuICAgICAgY29uc3QgZm91bmRMYXN0Rk1TdWJUcmVlID0gc2VnbWVudHMuZXZlcnkoc2VnbWVudCA9PiB7XG4gICAgICAgIGxhc3RGTVN1YlRyZWUgPSBsYXN0Rk1TdWJUcmVlW3NlZ21lbnRdO1xuICAgICAgICByZXR1cm4gbGFzdEZNU3ViVHJlZSAhPT0gdW5kZWZpbmVkICYmIChsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCB8fCBvbmx5TGFzdFNlZ21lbnQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm91bmRMYXN0Rk1TdWJUcmVlICYmIGxhc3RGTVN1YlRyZWUuX19lbmFibGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYXNGTVNldHRpbmcoZm1QYXRoKSB7XG4gICAgY29uc3QgZm1TZXR0aW5nID0gdGhpcy5maW5kRk1TZXR0aW5nKGZtUGF0aCk7XG4gICAgcmV0dXJuIGZtU2V0dGluZyAmJiBmbVNldHRpbmcuX19lbmFibGVkICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBmaW5kRk1TZXR0aW5nKGZtUGF0aCkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0aFNlZ21lbnRzKGZtUGF0aCk7XG4gICAgcmV0dXJuIHNlZ21lbnRzLnJlZHVjZSgoY3VycmVudEZNU2V0dGluZywgc2VnbWVudCkgPT4gY3VycmVudEZNU2V0dGluZyAmJiBjdXJyZW50Rk1TZXR0aW5nW3NlZ21lbnRdXG4gICAgICAsIHRoaXMuX2ZtVHJlZSB8fCB7fSk7XG4gIH1cblxuICBzZXRGTVNldHRpbmcoZm1QYXRoLCBlbmFibGVkKSB7XG4gICAgaWYgKHRoaXMuX2ZtVHJlZSkge1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSB0aGlzLl9nZXRQYXRoU2VnbWVudHMoZm1QYXRoKTtcbiAgICAgIGNvbnN0IGxhc3RGTVN1YlRyZWUgPSBzZWdtZW50cy5yZWR1Y2UoKGN1cnJlbnRGTVRyZWUsIHNlZ21lbnQpID0+IHtcbiAgICAgICAgbGV0IHNlZ21lbnRGTSA9IGN1cnJlbnRGTVRyZWVbc2VnbWVudF07XG4gICAgICAgIGlmIChzZWdtZW50Rk0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlZ21lbnRGTSA9IHt9O1xuICAgICAgICAgIGN1cnJlbnRGTVRyZWVbc2VnbWVudF0gPSBzZWdtZW50Rk07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlZ21lbnRGTTtcbiAgICAgIH0sIHRoaXMuX2ZtVHJlZSk7XG4gICAgICBsYXN0Rk1TdWJUcmVlLl9fZW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgX2dldFBhdGhTZWdtZW50cyhmbVBhdGgpIHtcbiAgICAvLyBpZ25vcmUgZmlyc3QgXCIvXCIgdG8gZXhjbHVkZSBlbXB0eSBzdHJpbmcgZnJvbSB0aGUgc3BsaXRcbiAgICByZXR1cm4gZm1QYXRoLnN1YnN0cmluZygxKS5zcGxpdCgnLycpO1xuICB9XG59XG4iLCJpbXBvcnQgVGVzdEFQRmllbGQgZnJvbSAnLi9hY3Rpdml0eVByZXZpZXcvY29tcG9uZW50cy9UZXN0QVBGaWVsZCc7XG5pbXBvcnQgVGVzdGluZ1NlY3Rpb24gZnJvbSAnLi9hY3Rpdml0eVByZXZpZXcvY29tcG9uZW50cy9UZXN0aW5nU2VjdGlvbic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvQ29uc3RhbnRzJztcbmltcG9ydCBBY3Rpdml0eUNvbnN0YW50cyBmcm9tICcuL21vZHVsZXMvdXRpbC9BY3Rpdml0eUNvbnN0YW50cyc7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMgZnJvbSAnLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXJDb25zdGFudHMnO1xuaW1wb3J0IEVycm9yQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzL0Vycm9yQ29uc3RhbnRzJztcbmltcG9ydCBDdXJyZW5jeVJhdGVzTWFuYWdlciBmcm9tICcuL21vZHVsZXMvdXRpbC9DdXJyZW5jeVJhdGVzTWFuYWdlcic7XG5pbXBvcnQgRmVhdHVyZU1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWwvRmVhdHVyZU1hbmFnZXInO1xuXG5cbmV4cG9ydCB7XG4gIFRlc3RBUEZpZWxkLCBUZXN0aW5nU2VjdGlvbiwgQ29uc3RhbnRzLCBBY3Rpdml0eUNvbnN0YW50cywgRmVhdHVyZU1hbmFnZXJDb25zdGFudHMsIEVycm9yQ29uc3RhbnRzLFxuICBDdXJyZW5jeVJhdGVzTWFuYWdlciwgRmVhdHVyZU1hbmFnZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVGVzdEFQRmllbGQsXG4gIFRlc3RpbmdTZWN0aW9uLFxuICBDb25zdGFudHMsXG4gIEFjdGl2aXR5Q29uc3RhbnRzLFxuICBGZWF0dXJlTWFuYWdlckNvbnN0YW50cyxcbiAgRXJyb3JDb25zdGFudHMsXG4gIEN1cnJlbmN5UmF0ZXNNYW5hZ2VyLFxuICBGZWF0dXJlTWFuYWdlclxufTtcbiJdLCJuYW1lcyI6WyJUZXN0QVBGaWVsZCIsInRybkxhYmVsIiwidmFsdWUiLCJpbmxpbmUiLCJzZXBhcmF0b3IiLCJuYW1lQ2xhc3MiLCJ2YWx1ZUNsYXNzIiwicHJvcHMiLCJ0cmFuc2xhdGUiLCJhbXBMb2dnZXIiLCJsb2ciLCJ1c2VTZXBhcmF0b3IiLCJkaXNwbGF5Q2xhc3MiLCJmaWVsZENsYXNzIiwic3R5bGVzIiwiYmxvY2siLCJjbGFzc05hbWVzIiwiZmllbGRWYWx1ZUNsYXNzIiwiZGlzcGxheVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiZm9yRWFjaCIsInB1c2giLCJ2Iiwic29ydCIsImpvaW4iLCJTdHJpbmciLCJ1c2VJbm5lckhUTUwiLCJfX2h0bWwiLCJmaWVsZE5hbWVDbGFzcyIsInRpdGxlIiwiX2dldFZhbHVlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiVGVzdGluZ1NlY3Rpb24iLCJCQVNFX1JFU1RfVVJMIiwiQ09OTkVDVElPTl9USU1FT1VUIiwiQ09OTkVDVElPTl9GT1JDRURfVElNRU9VVCIsIlRJTUVPVVRfQ0hFQ0tfSU5URVJWQUwiLCJNQVhfUkVUUllfQVRFTVBUUyIsIkVSUk9SU19UT19SRVRSWSIsIkVSUk9SU19OT19BTVBfU0VSVkVSIiwiQ09OTkVDVElWSVRZX0NIRUNLX0lOVEVSVkFMIiwiV09SS1NQQUNFX1VSTCIsIkxPR0lOX1VSTCIsIkRFU0tUT1BfVVJMIiwiREVTS1RPUF9DVVJSRU5UX1VSTCIsIlNZTkNVUF9SRURJUkVDVF9VUkwiLCJTWU5DVVBfSElTVE9SWV9UQVJHRVQiLCJTWU5DVVBfU1VNTUFSWV9VUkwiLCJBQ1RJVklUWV9QUkVWSUVXX1VSTCIsIkFDVElWSVRZX0VESVRfVVJMIiwiVVBEQVRFX1VSTCIsIlNFVFVQX1VSTCIsIlNFVFRJTkdTX1VSTCIsIkNPTExFQ1RJT05fVVNFUlMiLCJDT0xMRUNUSU9OX1dPUktQQUNFUyIsIkNPTExFQ1RJT05fVEVBTU1FTUJFUlMiLCJDT0xMRUNUSU9OX0NMSUVOVF9TRVRUSU5HUyIsIkNPTExFQ1RJT05fR0xPQkFMX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9BQ1RJVklUSUVTIiwiQ09MTEVDVElPTl9GSUVMRFMiLCJDT0xMRUNUSU9OX1BPU1NJQkxFX1ZBTFVFUyIsIkNPTExFQ1RJT05fU1lOQ1VQX0xPRyIsIkNPTExFQ1RJT05fTEFOR1MiLCJDT0xMRUNUSU9OX1dTX1NFVFRJTkdTIiwiQ09MTEVDVElPTl9DVVJSRU5DWV9SQVRFUyIsIkNPTExFQ1RJT05fRkVBVFVSRV9NQU5BR0VSIiwiQ09MTEVDVElPTl9DT05UQUNUUyIsIkNPTExFQ1RJT05fUkVTT1VSQ0VTIiwiQ09MTEVDVElPTl9SRVBPU0lUT1JZIiwiQ09MTEVDVElPTl9HQVpFVFRFRVIiLCJDT0xMRUNUSU9OX0NBTEVOREFSUyIsIkNPTExFQ1RJT05fQ0hBTkdFU0VUUyIsIkdBWkVUVEVFUl9ESVNUQU5DRV9ESVZJREUiLCJEQl9GSUxFX1BSRUZJWCIsIkRCX0ZJTEVfRVhURU5TSU9OIiwiREJfQ09NTU9OX0RBVEFTVE9SRV9PUFRJT05TIiwiYXV0b2xvYWQiLCJjb3JydXB0QWxlcnRUaHJlc2hvbGQiLCJEQl9BVVRPQ09NUEFDVF9JTlRFUlZBTF9NSUxJU0VDT05EUyIsIkRCX0RFRkFVTFRfUVVFUllfTElNSVQiLCJMQU5HVUFHRV9FTkdMSVNIIiwiRlNfTE9DQUxFU19ESVJFQ1RPUlkiLCJMQU5HVUFHRV9NQVNURVJfVFJBTlNMQVRJT05TX0ZJTEUiLCJMQU5HVUFHRV9UUkFOU0xBVElPTlNfRklMRSIsIkxBTkdVQUdFX05FV19UUkFOU0xBVElPTlNfTVVTVF9TWU5DIiwiQVNBUl9ESVIiLCJBUFBfRElSRUNUT1JZIiwiVEVTVF9ESVJFQ1RPUlkiLCJTVEFUSUNfRElSIiwiSU1BR0VTX0RJUiIsIkRPQ19JQ09OUyIsIkRCX1NUQVRJQ19ESVIiLCJNSUdSQVRJT05TX0RJUiIsIkhBU0hfSVRFUkFUSU9OUyIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMSIsIkRJR0VTVF9BTEdPUklUSE1fU0hBMjU2IiwiQUNUSVZJVFlfRURJVCIsIkFDVElWSVRZX1ZJRVciLCJTWU5DVVBfRk9SQ0VfREFZUyIsIlNZTkNVUF9CRVNUX0JFRk9SRV9EQVlTIiwiU1lOQ1VQX05PX0RBVEUiLCJTWU5DVVBfVFlQRV9UUkFOU0xBVElPTlMiLCJTWU5DVVBfVFlQRV9VU0VSUyIsIlNZTkNVUF9UWVBFX0FTU0VUUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRVMiLCJTWU5DVVBfVFlQRV9HUyIsIlNZTkNVUF9UWVBFX0VYQ0hBTkdFX1JBVEVTIiwiU1lOQ1VQX1RZUEVfRkVBVFVSRV9NQU5BR0VSIiwiU1lOQ1VQX1RZUEVfV09SS1NQQUNFX01FTUJFUlMiLCJTWU5DVVBfVFlQRV9BTExfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVUxMIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVElFU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfRklFTERTX1NUUlVDVFVSQUxfQ0hBTkdFUyIsIlNZTkNVUF9UWVBFX0NPTlRBQ1RTX1BVTEwiLCJTWU5DVVBfVFlQRV9DT05UQUNUU19QVVNIIiwiU1lOQ1VQX1RZUEVfQUNUSVZJVFlfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09OVEFDVF9GSUVMRFMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX0ZJRUxEU19TVFJVQ1RVUkFMX0NIQU5HRVMiLCJTWU5DVVBfVFlQRV9DT05UQUNUX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1JFU09VUkNFU19QVUxMIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VTX1BVU0giLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFMiLCJTWU5DVVBfVFlQRV9SRVNPVVJDRV9GSUVMRFNfU1RSVUNUVVJBTF9DSEFOR0VTIiwiU1lOQ1VQX1RZUEVfUkVTT1VSQ0VfUE9TU0lCTEVfVkFMVUVTIiwiU1lOQ1VQX1RZUEVfQ09NTU9OX1BPU1NJQkxFX1ZBTFVFUyIsIlNZTkNVUF9UWVBFX1dPUktTUEFDRV9TRVRUSU5HUyIsIlNZTkNVUF9UWVBFX01BUF9USUxFUyIsIlNZTkNVUF9UWVBFX0dBWkVUVEVFUiIsIlNZTkNVUF9UWVBFX0NBTEVOREFSUyIsIlNZTkNVUF9TVEFUVVNfU1VDQ0VTUyIsIlNZTkNVUF9TVEFUVVNfRkFJTCIsIlNZTkNVUF9TVEFUVVNfUEFSVElBTCIsIlNZTkNVUF9TVEFUVVNfQ0FOQ0VMRUQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQVQiLCJTWU5DVVBfU1lOQ19SRVFVRVNURURfQlkiLCJTWU5DVVBfREFURVRJTUVfRklFTEQiLCJTWU5DVVBfRElGRl9MRUZUT1ZFUiIsIlNZTkNVUF9ERVBFTkRFTkNZX0NIRUNLX0lOVEVSVkFMIiwiU1lOQ1VQX0RFVEFJTFNfU1lOQ0VEIiwiU1lOQ1VQX0RFVEFJTFNfVU5TWU5DRUQiLCJTWU5DVVBfUkVTT1VSQ0VfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0FDVElWSVRJRVNfUFVMTF9CQVRDSF9TSVpFIiwiU1lOQ1VQX0NPTlRBQ1RTX1BVTExfQkFUQ0hfU0laRSIsIkFDVElWSVRZX1NUQVRVU19EUkFGVCIsIkFDVElWSVRZX1NUQVRVU19VTlZBTElEQVRFRCIsIkFDVElWSVRZX1NUQVRVU19WQUxJREFURUQiLCJDVVJSRU5DWV9IT1VSIiwiREVGQVVMVF9DVVJSRU5DWSIsIlJBVEVfU0FNRV9DVVJSRU5DWSIsIlJBVEVfQ1VSUkVOQ1lfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfUEFJUiIsIlZFUlNJT05fUEFUVEVSTiIsIlZFUlNJT05fUEFUVEVSTl9HUk9VUFNfVE9fRVhUUkFDVCIsIkFNUF9DT1VOVFJZX0xPR08iLCJBU1NFVFNfRElSRUNUT1JZIiwiQkFTRV82NF9QTkdfUFJFRklYIiwiVFJBTlNQQVJFTlRfRkxBRyIsIkhFTFBfUERGX0ZJTEVOQU1FIiwiSEVMUF9ESVIiLCJFTkRTX1dJVEhfUFVOQ1RVQVRJT05fUkVHRVgiLCJNQVBfVElMRVNfRElSIiwiVElMRVNfWklQX0ZJTEUiLCJNQVBfTUFSS0VSX0lNQUdFIiwiTUFQX01BUktFUl9TSEFET1ciLCJNQVBfTUFSS0VSX0NJUkNMRV9SRUQiLCJNQVBfTUFSS0VSX0NJUkNMRV9HUkVFTiIsIlBPTFlHT05fQkFTRV9DT0xPUiIsIkRHX0NPTVBBTllfTkFNRSIsIkRHX0FERFJFU1NfMSIsIkRHX0FERFJFU1NfMiIsIkRHX0NPTlRBQ1RfSU5GTyIsIkxPR19ESVIiLCJMT0dfRklMRV9OQU1FIiwiTE9HX0ZJTEVfRVhURU5TSU9OIiwiTUVTU0FHRV9USU1FT1VUIiwiTUVTU0FHRV9ESVNBUFBFQVJfVElNRU9VVCIsIk1FU1NBR0VfQ0hFQ0tfSU5URVJWQUwiLCJNRVNTQUdFX0FOSU1BVElPTl9EVVJBVElPTiIsIklOVEVSTkFMX0RBVEVfRk9STUFUIiwiTUlOX1NVUFBPUlRFRF9ZRUFSIiwiTUFYX1NVUFBPUlRFRF9ZRUFSIiwiVVBEQVRFU19ESVIiLCJDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiIsIlVQREFURV9UTVBfRklMRSIsIk9USEVSX0lEIiwiTlJfU1lOQ19ISVNUT1JZX0VOVFJJRVMiLCJOUl9MT0dfRklMRVMiLCJPTERfU1lOQ19MT0dTX0RVUkFUSU9OX0lTT184NjAxIiwiTlJfT0xEX1NZTkNfTE9HU19UT19LRUVQX01JTklNVU0iLCJNQVNURVJfQlJBTkNIIiwiREVWRUxPUF9CUkFOQ0giLCJSRUxFQVNFX0JSQU5DSF9SRUdFWCIsIlJFTEVBU0VfQlJBTkNIRVMiLCJESVNBQkxFX0NIQU5HRUxPR1MiLCJtb2R1bGUiLCJmcmVlemUiLCJQVUJMSUNfVklFV19DSEFOR0VfUEFTU1dPUkQiLCJQVUJMSUNfVklFV19UUk9VQkxFX1NJR05fSU4iLCJBQ1RJVklUWV9ERUxJVkVSWV9SQVRFIiwiQUNUSVZJVFlfUFJPSkVDVF9JRF9BTkRfUExBTk5JTkciLCJBQ1RJVklUWV9EVVJBVElPTl9PRl9QUk9KRUNUIiwiQUNUSVZJVFlfVEVBTV9MRUFERVIiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX1NUQVJUX0RBVEUiLCJBQ1RJVklUWV9TQU1FX0FTX1BST1BPU0VEX0FQUFJPVkFMX0RBVEUiLCJBQ1RJVklUWV9JREVOVElGSUNBVElPTiIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9CWSIsIkFDVElWSVRZX0xBU1RfVVBEQVRFRF9PTiIsIkFDVElWSVRZX0ZVTkRJTkciLCJBRl9GVU5ESU5HX0ZVTkRJTkdHUk9VUF9GVU5ESU5HSVRFTSIsIkFDVElWSVRZX1NFQ1RPUlMiLCJBQ1RJVklUWV9QUklNQVJZX1NFQ1RPUlMiLCJBQ1RJVklUWV9TRUNPTkRBUllfU0VDVE9SUyIsIkFDVElWSVRZX1NUUlVDVFVSRVMiLCJBQ1RJVklUWV9TVFJVQ1RVUkVTX0FERF9TVFJVQ1RVUkUiLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0JFTkVGSUNJQVJZX0FHRU5DWSIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQ09OVFJBQ1RJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19SRUdJT05BTF9HUk9VUCIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfUkVMQVRFRF9HT1ZFUk5NRU5UX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfU0VDVE9SX0dST1VQIiwiQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfQkVORUZJQ0lBUllfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX0NPTlRSQUNUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19ET05PUl9PUkdBTklaQVRJT05fQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX09SR0FOSVpBVElPTlNfRVhFQ1VUSU5HX0FHRU5DWV9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19JTVBMRU1FTlRJTkdfQUdFTkNZX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFR0lPTkFMX0dST1VQX0FERF9GVU5ESU5HX0FVVE8iLCJBQ1RJVklUWV9PUkdBTklaQVRJT05TX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTl9BRERfRlVORElOR19BVVRPIiwiQUNUSVZJVFlfT1JHQU5JWkFUSU9OU19TRUNUT1JfR1JPVVBfQUREX0ZVTkRJTkdfQVVUTyIsIkFDVElWSVRZX0ZVTkRJTkdfU0VBUkNIIiwiQUNUSVZJVFlfRlVORElOR19TRUFSQ0hfT1JHQU5JWkFUSU9OIiwiQUNUSVZJVFlfRlVORElOR19TRUxFQ1RfT1JHX1RZUEUiLCJBQ1RJVklUWV9QUk9HUkFNIiwiQUNUSVZJVFlfUExBTk5JTkciLCJBQ1RJVklUWV9DT05UQUNUIiwiQUNUSVZJVFlfRE9DVU1FTlRTX0FERF9ET0NVTUVOVCIsIkFDVElWSVRZX0RPQ1VNRU5UU19BRERfV0VCTElOSyIsIkFDVElWSVRZX0lTU1VFU19BRERfSVNTVUUiLCJBQ1RJVklUWV9JU1NVRVNfREVMRVRFX0lTU1VFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0RFTEVURV9NRUFTVVJFIiwiQUNUSVZJVFlfSVNTVUVTX0FERF9BQ1RPUiIsIkFDVElWSVRZX0lTU1VFU19ERUxFVEVfQUNUT1IiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfSU1QTEVNRU5USU5HX0FHRU5DWSIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9ESVNCVVJTRU1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0RPTk9SX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfRElTQlVSU0VNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFU1BPTlNJQkxFX09SR0FOSVpBVElPTiIsIkFDVElWSVRZX0RJU0JVUlNFTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0NPTlRSQUNUSU5HX0FHRU5DWSIsIkFDVElWSVRZX0NPTU1JVE1FTlRTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfQkVORUZJQ0lBUllfQUdFTkNZIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0VYRUNVVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1JFR0lPTkFMX0dST1VQIiwiQUNUSVZJVFlfQ09NTUlUTUVOVFNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9DT01NSVRNRU5UU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX1NFQ1RPUl9HUk9VUCIsIkFDVElWSVRZX0VYUEVORElUVVJFU19GVU5ESU5HX0ZMT1dTX09SR1JPTEVfQUREX0lNUExFTUVOVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9DT05UUkFDVElOR19BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9CRU5FRklDSUFSWV9BR0VOQ1kiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9ET05PUl9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9FWEVDVVRJTkdfQUdFTkNZIiwiQUNUSVZJVFlfRVhQRU5ESVRVUkVTX0ZVTkRJTkdfRkxPV1NfT1JHUk9MRV9BRERfUkVHSU9OQUxfR1JPVVAiLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9SRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJBQ1RJVklUWV9FWFBFTkRJVFVSRVNfRlVORElOR19GTE9XU19PUkdST0xFX0FERF9TRUNUT1JfR1JPVVAiLCJNVEVGX1BST0pFQ1RJT05TIiwiTVRFRl9QUk9KRUNUSU9OU19BTU9VTlQiLCJNVEVGX1BST0pFQ1RJT05TX0NVUlJFTkNZIiwiTVRFRl9QUk9KRUNUSU9OU19QUk9KRUNUSU9OIiwiTVRFRl9QUk9KRUNUSU9OU19EQVRFIiwiQUNUSVZJVFlfQlVER0VUIiwiQUNUSVZJVFlfU1RBVFVTIiwiU1RBVFVTX1JFQVNPTiIsIkZJTkFOQ0lBTF9JTlNUUlVNRU5UIiwiVFlQRV9PRl9JTVBMRU1FTlRBVElPTiIsIk9CSkVDVElWRSIsIlJFU1VMVFMiLCJCVURHRVRfQ09ERV9QUk9KRUNUX0lEIiwiQUNUVUFMX0FQUFJPVkFMX0RBVEUiLCJGVU5ESU5HUyIsIkZVTkRJTkdfRE9OT1JfT1JHX0lEIiwiSVNfRFJBRlQiLCJPUkdfUk9MRV9PUkdfSUQiLCJBRERJVElPTkFMX0lORk8iLCJQUklNQVJZX1NFQ1RPUlMiLCJTRUNPTkRBUllfU0VDVE9SUyIsIlRFUlRJQVJZX1NFQ1RPUlMiLCJUQUdfU0VDVE9SUyIsIlNFQ1RPUiIsIlNFQ1RPUl9QRVJDRU5UQUdFIiwiRklOQU5DSU5HX0lOU1RSVU1FTlQiLCJNT0RBTElUSUVTIiwiTElORV9NSU5JU1RSWV9SQU5LIiwiR09WRVJOTUVOVF9BR1JFRU1FTlRfTlVNQkVSIiwiRlVORElOR19TVEFUVVMiLCJMT0NBVElPTlMiLCJMT0NBVElPTiIsIkxPQ0FUSU9OX1BFUkNFTlRBR0UiLCJJTVBMRU1FTlRBVElPTl9MT0NBVElPTiIsIklNUExFTUVOVEFUSU9OX0xFVkVMIiwiQVBQUk9WQUxfU1RBVFVTIiwiQVBQUk9WRURfQlkiLCJBUFBST1ZBTF9EQVRFIiwiVFlQRV9PRl9BU1NJU1RBTkNFIiwiRVhQRU5ESVRVUkVfQ0xBU1MiLCJGVU5ESU5HX0RFVEFJTFMiLCJNT0RFX09GX1BBWU1FTlQiLCJGVU5ESU5HX0NMQVNTSUZJQ0FUSU9OX0RBVEUiLCJBR1JFRU1FTlQiLCJET05PUl9PQkpFQ1RJVkUiLCJDT05ESVRJT05TIiwiQUdSRUVNRU5UX0NPREUiLCJBR1JFRU1FTlRfVElUTEUiLCJQUk9KRUNUX0NBVEVHT1JZIiwiUFJPSkVDVF9JTVBMRU1FTlRJTkdfVU5JVCIsIk9SR0FOSVpBVElPTiIsIlBFUkNFTlRBR0UiLCJBTVBfT1JHQU5JWkFUSU9OX1JPTEVfSUQiLCJST0xFIiwiRVhFQ1VUSU5HX0FHRU5DWSIsIkNPTlRSQUNUSU5HX0FHRU5DWSIsIkJFTkVGSUNJQVJZX0FHRU5DWSIsIklNUExFTUVOVElOR19BR0VOQ1kiLCJSRVNQT05TSUJMRV9PUkdBTklaQVRJT04iLCJET05PUl9PUkdBTklaQVRJT04iLCJSRUdJT05BTF9HUk9VUCIsIlNFQ1RPUl9HUk9VUCIsIkJVREdFVFMiLCJCVURHRVRfQ09ERSIsIkJVREdFVF9PUkdBTklaQVRJT05fQ09ERSIsIkFSQ0hJVkVEIiwiVFJBTlNBQ1RJT05fREFURSIsIlRSQU5TQUNUSU9OX1RZUEUiLCJDT01NSVRNRU5UUyIsIkRJU0JVUlNFTUVOVFMiLCJFWFBFTkRJVFVSRVMiLCJFU1RJTUFURURfRElTQlVSU0VNRU5UUyIsIlRSQU5TQUNUSU9OX0FNT1VOVCIsIkFESlVTVE1FTlRfVFlQRSIsIkFDVFVBTF9TVEFSVF9EQVRFIiwiUFJPUE9TRURfU1RBUlRfREFURSIsIkFDVFVBTF9DT01QTEVUSU9OX0RBVEUiLCJDT05UUkFDVElOR19EQVRFIiwiRElTQlVSU0VNRU5UX0RBVEUiLCJQUk9QT1NFRF9BUFBST1ZBTF9EQVRFIiwiT1JJR0lOQUxfQ09NUExFVElPTl9EQVRFIiwiUFJPUE9TRURfQ09NUExFVElPTl9EQVRFIiwiRklOQUxfREFURV9GT1JfRElTQlVSU0VNRU5UUyIsIkZJTkFMX0RBVEVfRk9SX0NPTlRSQUNUSU5HIiwiRUZGRUNUSVZFX0ZVTkRJTkdfREFURSIsIkZVTkRJTkdfQ0xPU0lOR19EQVRFIiwiUkFUSUZJQ0FUSU9OX0RBVEUiLCJNQVRVUklUWSIsIkxBU1RfQVVESVRfREFURSIsIlNJR05BVFVSRV9EQVRFIiwiSFVNQU5JVEFSSUFOX0FJRCIsIkRJU0FTVEVSX1JFU1BPTlNFIiwiUFJPR1JBTSIsIlBST0dSQU1fUEVSQ0VOVEFHRSIsIlBST0dSQU1fU0VUVElOR1MiLCJOQVRJT05BTF9QTEFOX09CSkVDVElWRSIsIlBSSU1BUllfUFJPR1JBTVMiLCJTRUNPTkRBUllfUFJPR1JBTVMiLCJURVJUSUFSX1BST0dSQU1TIiwiR09WRVJOTUVOVF9BUFBST1ZBTF9QUk9DRURVUkVTIiwiSk9JTlRfQ1JJVEVSSUEiLCJURUFNIiwiUkVKRUNURURfSUQiLCJJTlRFUk5BTF9JRCIsIkFNUF9JRCIsIlBST0pFQ1RfVElUTEUiLCJERVNDUklQVElPTiIsIk1PRElGSUVEX0JZIiwiTU9ESUZJRURfT04iLCJDUkVBVEVEX0JZIiwiQ1JFQVRFRF9PTiIsIkxBU1RfSU1QT1JURURfQlkiLCJDTElFTlRfQ0hBTkdFX0lEIiwiQ0xJRU5UX0NSRUFURURfT04iLCJDTElFTlRfVVBEQVRFRF9PTiIsIklTX1BVU0hFRCIsIkFDVElWSVRZX0dST1VQIiwiVkVSU0lPTiIsIlBST0pFQ1RfQ09NTUVOVFMiLCJMRVNTT05TX0xFQVJORUQiLCJQUk9KRUNUX0lNUEFDVCIsIkFDVElWSVRZX1NVTU1BUlkiLCJDT05ESVRJT05BTElUSUVTIiwiUFJPSkVDVF9NQU5BR0VNRU5UIiwiQV9DX0NIQVBURVIiLCJDUklTX05VTUJFUiIsIklBVElfSURFTlRJRklFUiIsIkFDVElWSVRZX0lOVEVSTkFMX0lEUyIsIkhJRVJBUkNISUNBTF9WQUxVRSIsIkhJRVJBUkNISUNBTF9WQUxVRV9QQVJUUyIsIkhJRVJBUkNISUNBTF9WQUxVRV9ERVBUSCIsIlBQQ19BTU9VTlQiLCJSUENfQU1PVU5UIiwiUFBDX0FOTlVBTF9CVURHRVRTIiwiQU1PVU5UIiwiQ1VSUkVOQ1kiLCJGVU5ESU5HX0RBVEUiLCJDT01QT05FTlRTIiwiVE9UQUxfTlVNQkVSX09GX0ZVTkRJTkdfU09VUkNFUyIsIlNPVVJDRV9ST0xFIiwiQU1QX0ZVTkRJTkdfSUQiLCJJU1NVRVMiLCJJU1NVRV9EQVRFIiwiSVNTVUVfTkFNRSIsIk1FQVNVUkVTIiwiTUVBU1VSRV9OQU1FIiwiTUVBU1VSRV9EQVRFIiwiQUNUT1JTIiwiQUNUT1JfTkFNRSIsIlNUUlVDVFVSRVMiLCJTVFJVQ1RVUkVTX1RJVExFIiwiU1RSVUNUVVJFU19ERVNDUklQVElPTiIsIlNUUlVDVFVSRVNfTEFUSVRVREUiLCJTVFJVQ1RVUkVTX0xPTkdJVFVERSIsIlNUUlVDVFVSRVNfQ09MT1IiLCJTVFJVQ1RVUkVTX0xBVCIsIlNUUlVDVFVSRVNfTE5HIiwiU1RSVUNUVVJFU19TSEFQRSIsIlNUUlVDVFVSRVNfUE9JTlQiLCJTVFJVQ1RVUkVTX1BPTFlHT04iLCJTVFJVQ1RVUkVTX1BPTFlMSU5FIiwiU1RSVUNUVVJFU19DT09SRElOQVRFUyIsIkNPTVBPTkVOVF9UWVBFIiwiQ09NUE9ORU5UX1RJVExFIiwiQ09NUE9ORU5UX0ZVTkRJTkciLCJDT01QT05FTlRfREVTQ1JJUFRJT04iLCJDT01QT05FTlRfT1JHQU5JWkFUSU9OIiwiRlVORElOR19BTU9VTlRfSUQiLCJFWFRSQV9JTkZPIiwiVkFMVUUiLCJBQ1JPTllNIiwiVFlQRV9PRl9DT09QRVJBVElPTiIsIkFOTlVBTF9QUk9KRUNUX0JVREdFVF9JRCIsIlRZUEUiLCJZRUFSIiwiR1JPVVBfVkVSU0lPTkVEX0ZVTkRJTkciLCJBQ1RJVkVfTElTVCIsIkFDVElWRSIsIkRFTEVHQVRFRF9DT09QRVJBVElPTiIsIkRFTEVHQVRFRF9QQVJUTkVSIiwiRklOQU5DSU5HX0lEIiwiRElTQlVSU0VNRU5UX09SREVSX0lEIiwiUExFREdFIiwiQ0FQSVRBTF9TUEVORElOR19QRVJDRU5UQUdFIiwiUkVQT1JUSU5HX0RBVEUiLCJSRUNJUElFTlRfUk9MRSIsIlJFQ0lQSUVOVF9PUkdBTklaQVRJT04iLCJURU1QT1JBTF9JRCIsIk1JTklTVFJZX0NPREUiLCJQUk9KRUNUX0NPREUiLCJGWSIsIklORElSRUNUX09OX0JVREdFVCIsIklNUExFTUVOVEFUSU9OX0xFVkVMU19FWFRSQV9JTkZPIiwiSU1QTEVNRU5UQVRJT05fTE9DQVRJT05fRVhUUkFfSU5GTyIsIkRPTk9SX0NPTlRBQ1QiLCJQUk9KRUNUX0NPT1JESU5BVE9SX0NPTlRBQ1QiLCJTRUNUT1JfTUlOSVNUUllfQ09OVEFDVCIsIk1PRkVEX0NPTlRBQ1QiLCJJTVBMRU1FTlRJTkdfRVhFQ1VUSU5HX0FHRU5DWV9DT05UQUNUIiwiQ09OVEFDVCIsIk9SR0FOSVpBVElPTl9HUk9VUCIsIkZJWEVEX0VYQ0hBTkdFX1JBVEUiLCJQUklNQVJZX0NPTlRBQ1QiLCJBQ1RJVklUWV9ET0NVTUVOVFMiLCJET0NVTUVOVF9UWVBFIiwiSVNPMiIsIlBST0pFQ1RJT04iLCJQSVBFTElORSIsIlBST0pFQ1RJT05fREFURSIsIlNBTUVfQVNfUFJPUE9TRURfU1RBUlRfREFURV9MQUJFTCIsIlNBTUVfQVNfUFJPUE9TRURfQVBQUk9WQUxfREFURV9MQUJFTCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfUFJFU0VOVCIsIkRFUEVOREVOQ1lfSU1QTEVNRU5UQVRJT05fTEVWRUxfVkFMSUQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0lNUExFTUVOVEFUSU9OX0xPQ0FUSU9OX1ZBTElEIiwiREVQRU5ERU5DWV9QUk9KRUNUX0NPREVfT05fQlVER0VUIiwiREVQRU5ERU5DWV9PTl9CVURHRVQiLCJERVBFTkRFTkNZX1RSQU5TQUNUSU9OX1BSRVNFTlQiLCJERVBFTkRFTkNZX0NPTVBPTkVOVF9GVU5ESU5HX09SR19WQUxJRCIsIkFQX1NFQ1RJT05fSURTIiwia2V5IiwiaGFzaCIsImZtUGF0aCIsIkZNQyIsInNlY3Rpb25QYXRoIiwiQUNUSVZJVFlfSU5URVJOQUxfSURTX0NPTFMiLCJBQ1RJVklUWV9QTEFOTklOR19DT0xTIiwiQUNUSVZJVFlfTE9DQVRJT05fQ09MUyIsIkFDVElWSVRZX0ZVTkRJTkdfQ09MUyIsIkFDVElWSVRZX0NPTlRBQ1RfQ09MUyIsIkFQX0ZVTkRJTkdTX1RBQkxFX0NPTFMiLCJNVUxUSV9TRUxFQ1RfTUlOX1NJWkUiLCJNVUxUSV9TRUxFQ1RfTUFYX1NJWkUiLCJ0b0ZpZWxkTmFtZXMiLCJsaXN0T2ZOYW1lcyIsIm1hcCIsInRvRmllbGROYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInRvT3JpZ2luYWxMYWJlbCIsImZpZWxkTmFtZSIsImNhcGl0YWxpemUiLCJ0ZXh0IiwiY2hhciIsInRvVXBwZXJDYXNlIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU0VDVVJJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FQSV9ORVRXT1JLIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfU1lOQ1VQIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9BUElfR0VORVJBTCIsIk5PVElGSUNBVElPTl9PUklHSU5fREFUQUJBU0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX0FVVEhFTlRJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0VfRklMVEVSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XT1JLU1BBQ0UiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NZTkNVUF9QUk9DRVNTIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9DVVJSRU5DWV9NQU5BR0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9EQVRFUyIsIk5PVElGSUNBVElPTl9PUklHSU5fQUNUSVZJVFkiLCJOT1RJRklDQVRJT05fT1JJR0lOX1JFU09VUkNFIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9JMThORVhUIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9VUERBVEVfQ0hFQ0siLCJOT1RJRklDQVRJT05fT1JJR0lOX1VQREFURSIsIk5PVElGSUNBVElPTl9PUklHSU5fU0VUVVAiLCJOT1RJRklDQVRJT05fT1JJR0lOX1NFVFRJTkdTIiwiTk9USUZJQ0FUSU9OX1NFVkVSSVRZX1dBUk5JTkciLCJOT1RJRklDQVRJT05fU0VWRVJJVFlfSU5GTyIsIk5PVElGSUNBVElPTl9TRVZFUklUWV9FUlJPUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9NSU5PUiIsIk5PVElGSUNBVElPTl9FUlJPUl9MRVZFTF9CTE9DS0VSIiwiTk9USUZJQ0FUSU9OX09SSUdJTl9XUk9OR19NRVRIT0RfVVNBR0UiLCJFUlJPUl9DT0RFX05PX0NPTk5FQ1RJVklUWSIsIkVSUk9SX0NPREVfQUNDRVNTX0RFTklFRCIsIk1TR19JTlZBTElEX1VSTCIsIk1TR19USU1FT1VUIiwiTVNHX1VOS05PV05fTkVUV09SS19FUlJPUiIsIk1TR19BTVBfVU5SRUFDSEFCTEUiLCJHRU5FUkFMX0NPTk5FQ1RJT05fRVJST1JTIiwiQ3VycmVuY3lSYXRlc01hbmFnZXIiLCJjdXJyZW5jeVJhdGVzIiwiYmFzZUN1cnJlbmN5IiwiZGF0ZVV0aWxzIiwiZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJfY3VycmVuY3lSYXRlcyIsIl9iYXNlQ3VycmVuY3kiLCJfY3Vycm5jaWVzV2l0aEV4Y2hhbmdlUmF0ZXMiLCJfZ2V0Q3VycmVuY2llc1dpdGhFeGNoYW5nZVJhdGVzIiwiX3RyYW5zbGF0ZSIsIl9kYXRlVXRpbHMiLCJfZXJyb3JOb3RpZmljYXRpb25IZWxwZXIiLCJjdXJyZW5jeUZyb20iLCJjdXJyZW5jeVRvIiwiZGF0ZVRvRmluZCIsImZpeGVkRXhjaGFuZ2VSYXRlIiwiQ29uc3RhbnRzIiwiY29udmVydEN1cnJlbmN5IiwidGltZURhdGVUb0ZpbmQiLCJEYXRlIiwiZ2V0VGltZSIsImN1cnJlbmNpZXNUb1NlYXJjaERpcmVjdCIsImZpbmQiLCJpdGVtIiwiZnJvbSIsInRvIiwiZ2V0RXhjaGFuZ2VSYXRlIiwiY3VycmVuY2llc1RvU2VhcmNoSW52ZXJzZSIsImNvbnZlcnRWaWFCYXNlQ3VycmVuY3kiLCJfZ2V0Q3VycmVuY3lFcnJvciIsImZ1bmRpbmdEZXRhaWxzIiwidG90YWwiLCJjb252ZXJ0VHJhbnNhY3Rpb25BbW91bnRUb0N1cnJlbmN5IiwiZmQiLCJmdW5kaW5nRGV0YWlsIiwiYW1vdW50IiwiZGF0ZSIsImN1cnJlbmN5UmF0ZSIsImZvcm1hdERhdGVGb3JBUEkiLCJBY3Rpdml0eUNvbnN0YW50cyIsInRyYW5zYWN0aW9uRGF0ZSIsInRyYW5zYWN0aW9uQW1vdW50IiwiY29udmVydEFtb3VudFRvQ3VycmVuY3kiLCJjdXJyZW5jaWVzVG9TZWFyY2giLCJsb3dlckVuZCIsImhpZ2hlckVuZCIsInJhdGVzIiwibGVuZ3RoIiwibWlkZGxlIiwiTWF0aCIsImZsb29yIiwiZGlmZmVyZW5jZSIsImFicyIsImRpZmZlcmVuY2UxIiwicmF0ZSIsImVycm9yTWVzYWdlIiwibm90aWZFcnJvckN1cnJlbmN5IiwiY3JlYXRlTm90aWZpY2F0aW9uIiwiRXJyb3JDb25zdGFudHMiLCJyYXRlRnJvbVRvQmFzZSIsInJhdGVCYXNlVG9UbyIsInJhdGVUb1RvQmFzZSIsInJhdGVCYXNlVG9Gcm9tIiwiY3MiLCJTZXQiLCJhZGQiLCJleGNoYW5nZVJhdGVzIiwiRkVBVFVSRV9NQU5BR0VSIiwiRmVhdHVyZU1hbmFnZXIiLCJmbVRyZWUiLCJMb2dnZXJNYW5hZ2VyIiwiX2ZtVHJlZSIsIl9sb2dnZXJNYW5hZ2VyIiwib25seUxhc3RTZWdtZW50IiwiZGVidWciLCJsYXN0Rk1TdWJUcmVlIiwic2VnbWVudHMiLCJfZ2V0UGF0aFNlZ21lbnRzIiwiZm91bmRMYXN0Rk1TdWJUcmVlIiwiZXZlcnkiLCJzZWdtZW50IiwidW5kZWZpbmVkIiwiX19lbmFibGVkIiwiZm1TZXR0aW5nIiwiZmluZEZNU2V0dGluZyIsInJlZHVjZSIsImN1cnJlbnRGTVNldHRpbmciLCJlbmFibGVkIiwiY3VycmVudEZNVHJlZSIsInNlZ21lbnRGTSIsInN1YnN0cmluZyIsInNwbGl0IiwiX2N1cnJlbnRGTSIsImlzRk1TZXR0aW5nRW5hYmxlZCIsImhhc0ZNU2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtFQUM3QixLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0VBQy9CLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7O0VBRTVCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFOztFQUV4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNyRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQzVDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDOztFQUV4QixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7SUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO01BQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMzQyxNQUFNO01BQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QjtHQUNGLE1BQU07SUFDTCxJQUFJLENBQUMsV0FB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
