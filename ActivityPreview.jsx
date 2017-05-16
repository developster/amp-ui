import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import styles from './ActivityPreview.css';
import translate from '../../../utils/translate';
import * as AC from '../../../utils/constants/ActivityConstants';
import SummaryGroup from './SummaryGroup';
import MainGroup from './MainGroup';
import APField from './components/APField';
import ActivityFieldsManager from '../../../modules/activity/ActivityFieldsManager';
import ActivityFundingTotals from '../../../modules/activity/ActivityFundingTotals';
import LoggerManager from '../../../modules/util/LoggerManager';
import edit from '../../../../assets/images/AMP_ProjectIcon1.svg';
import version from '../../../../assets/images/AMP_ProjectIcon3.svg';
import print from '../../../../assets/images/AMP_ProjectIcon2.svg';
import pdf from '../../../../assets/images/pdf_icon.svg';
import word from '../../../../assets/images/word_icon.svg';

/**
 * Activity Preview main container
 * @author Nadejda Mandrescu
 */
export default class ActivityPreview extends Component {

  static propTypes = {
    activityReducer: PropTypes.shape({
      isActivityLoading: PropTypes.bool,
      isActivityLoaded: PropTypes.bool,
      activity: PropTypes.object,
      activityWorkspace: PropTypes.object,
      activityFieldsManager: PropTypes.instanceOf(ActivityFieldsManager),
      activityFundingTotals: PropTypes.instanceOf(ActivityFundingTotals),
      errorMessage: PropTypes.object
    }).isRequired,
    loadActivityForActivityPreview: PropTypes.func.isRequired,
    unloadActivity: PropTypes.func.isRequired,
    params: PropTypes.shape({
      activityId: PropTypes.string.isRequired
    }).isRequired
  };

  static childContextTypes = {
    activity: PropTypes.object,
    activityWorkspace: PropTypes.object,
    activityFieldsManager: PropTypes.instanceOf(ActivityFieldsManager),
    activityFundingTotals: PropTypes.instanceOf(ActivityFundingTotals)
  };

  constructor(props) {
    super(props);
    LoggerManager.log('constructor');
  }

  getChildContext() {
    return {
      activity: this.props.activityReducer.activity,
      activityWorkspace: this.props.activityReducer.activityWorkspace,
      activityFieldsManager: this.props.activityReducer.activityFieldsManager,
      activityFundingTotals: this.props.activityReducer.activityFundingTotals
    };
  }

  componentWillMount() {
    this.props.loadActivityForActivityPreview(this.props.params.activityId);
  }

  componentWillUnmount() {
    this.props.unloadActivity();
  }

  _renderData() {
    const activity = this.props.activityReducer.activity;
    const style = {
      verticalAlign: 'top'
    };
    const categoryArray = ['Identification', 'Agency Internal IDs', 'Planning',
      'Location', 'National Plan', 'Program', 'Sectors'];
    const categories = categoryArray.map((category) =>
      <li>{category}</li>
    );
    const editTooltip = (<Tooltip id="editTooltip">Edit</Tooltip>);
    const versionTooltip = (<Tooltip id="versionTooltip">Version History</Tooltip>);
    const pdfTooltip = (<Tooltip id="pdfTooltip">Save as PDF</Tooltip>);
    const wordTooltip = (<Tooltip id="wordTooltip">Save as Word Doc</Tooltip>);
    const printTooltip = (<Tooltip id="printTooltip">Print</Tooltip>);
    const previewStatus = [];
    previewStatus.push(APField.instance('AMP ID', activity.amp_id,
      styles.preview_status_title, styles.preview_status_detail));
    previewStatus.push(APField.instance('Status', 'Ongoing',
      styles.preview_status_title, styles.preview_status_detail));
    previewStatus.push(APField.instance('On/Off Budget', 'On Treasury',
      styles.preview_status_title, styles.preview_status_detail));


    return (
      <div className={styles.preview_container} >
        <div className={styles.preview_header} >
          <span className={styles.preview_title} >{activity[AC.PROJECT_TITLE]}</span>
          <span className={styles.preview_icons} >
            <ul>
              <li>
                <OverlayTrigger placement="top" overlay={editTooltip}>
                  <object type={'image/svg+xml'} data={edit}> Edit </object>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={versionTooltip}>
                  <object type={'image/svg+xml'} data={version}> Version History </object>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={pdfTooltip}>
                  <object type={'image/svg+xml'} data={pdf}> Save as PDF </object>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={wordTooltip}>
                  <object type={'image/svg+xml'} data={word}> Save as Word Doc </object>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger placement="top" overlay={printTooltip}>
                  <object type={'image/svg+xml'} data={print}> Print </object>
                </OverlayTrigger>
              </li>
            </ul>
          </span>
        </div>
        <div className={styles.preview_status_container} >
          {previewStatus}
        </div>
        <div className={styles.preview_categories} >
          <ul>
            {categories}
          </ul>
        </div>
        <div>
          <Grid fluid>
            <Row className={styles.preview_content}>
              <Col md={3} className={styles.preview_summary} >
                <SummaryGroup />
              </Col>
              <Col mdOffset={3} className={style.preview_main_data} >
                <MainGroup />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }

  _hasActivity() {
    return this.props.activityReducer.activity !== undefined && this.props.activityReducer.activity !== null;
  }

  _getMessage() {
    let message = null;
    if (this.props.activityReducer.isActivityLoading === true) {
      message = translate('activityLoading');
    } else if (this.props.activityReducer.isActivityLoaded === true) {
      if (!this.props.activityReducer.activity) {
        message = translate('activityUnexpectedError');
      }
    } else if (this.props.activityReducer.errorMessage) {
      message = `${this.props.activityReducer.errorMessage}`;
    }
    return message === null ? '' : <h1>{message}</h1>;
  }

  render() {
    const activityPreview = this._hasActivity() ? this._renderData() : '';
    return (
      <div>
        {this._getMessage()}
        {activityPreview}
      </div>
    );
  }
}
