import PreviewSection from './PreviewSection';
import * as ExportConstants from '../ExportConstants';
import ActivityConstants from '../../../modules/util/ActivityConstants';
import UIUtils from '../../UIUtils';
import FieldPathConstants from '../../FieldPathConstants';
import ValueConstants from '../../ValueConstants';

export default class FundingPreview extends PreviewSection {
  generateSection() {
    super.generateSection();
    if (this.checkIfEnabled()) {
      this.createSimpleLabel(this._context.translate('Funding'), ExportConstants.STYLE_HEADING2);
      if (this._props.activity[ActivityConstants.FUNDINGS]) {
        this._props.activity[ActivityConstants.FUNDINGS].forEach((funding) => {
          // Header data.
          const fieldPaths = [`${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_DONOR_ORG_ID]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.SOURCE_ROLE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.TYPE_OF_ASSISTANCE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FINANCING_INSTRUMENT]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_STATUS]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.MODE_OF_PAYMENT]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FUNDING_CLASSIFICATION_DATE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.FINANCING_ID]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.AGREEMENT]}~${[ActivityConstants.AGREEMENT_TITLE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.AGREEMENT]}~${[ActivityConstants.AGREEMENT_CODE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.DONOR_OBJECTIVE]}`,
            `${[ActivityConstants.FUNDINGS]}~${[ActivityConstants.CONDITIONS]}`];
          fieldPaths.map(i => {
            const field = this._section.prototype.buildSimpleField(i, true, null, false, funding, null,
              { stringOnly: true, context: this._context, props: this._props });
            if (field) {
              return this.createField(field.title, field.value, null, null);
            }
          });

          // Funding items table.
          const groups = [];
          FieldPathConstants.FUNDING_TRANSACTION_TYPES.forEach(trnType => {
            const fds = funding[trnType];
            if (fds && fds.length) {
              const fdByAT = new Map();
              ValueConstants.ADJUSTMENT_TYPES_AP_ORDER.forEach(adjType => fdByAT.set(adjType, []));
              fds.forEach(it => {
                const items = fdByAT.get(it[ActivityConstants.ADJUSTMENT_TYPE] &&
                  it[ActivityConstants.ADJUSTMENT_TYPE].value);
                if (items) {
                  items.push(it);
                }
              });
              ValueConstants.ADJUSTMENT_TYPES_AP_ORDER.forEach(adjType => {
                const items = fdByAT.get(adjType);
                if (items.length) {
                  groups.push([trnType, items]);
                }
              });
            }
          });
          groups.map(([trnType, group], idx) => {
            const currency = this._props.activityContext.workspaceCurrency;
            const adjType = group[0][ActivityConstants.ADJUSTMENT_TYPE];
            const measure = `${adjType.value} ${trnType}`;
            const trnPath = `${ActivityConstants.FUNDINGS}~${trnType}`;
            const showFixedExRate = this._context.activityFieldsManager
              .isFieldPathEnabled(`${trnPath}~${ActivityConstants.FIXED_EXCHANGE_RATE}`);
            const showDisasterResponse = this._context.activityFieldsManager
              .isFieldPathEnabled(`${trnPath}~${ActivityConstants.DISASTER_RESPONSE}`);
            const showPledge = this._context.activityFieldsManager
              .isFieldPathEnabled(`${trnPath}~${ActivityConstants.PLEDGE}`);
            // Adj type header.
            this.createSimpleLabel(measure, 'Heading3');
            if (showFixedExRate) {
              this.createSimpleLabel('Fixed Exchange Rate');
            }
            // TODO: Implement some sort of 'tablify' in PreviewSection.
            const table = this._document.createTable(group.length + 1, 4);
            group.forEach((g, i) => {
              table.getCell(i, 0).addContent(this.createSimpleLabel(adjType.value, null, { dontAddToDocument: true }));

              table.getCell(i, 1).addContent(this.createSimpleLabel(
                this._context.DateUtils.createFormattedDate(g[ActivityConstants.TRANSACTION_DATE]),
                null, { dontAddToDocument: true }));

              const convertedAmount = this._context.currencyRatesManager
                .convertTransactionAmountToCurrency(g, currency);
              table.getCell(i, 2).addContent(this.createSimpleLabel(
                `${this._context.rawNumberToFormattedString(convertedAmount)} ${currency}`,
                null, { dontAddToDocument: true }));
            });
            table.getCell(group.length, 0).addContent(this.createSimpleLabel(`Subtotal ${measure}`, null,
              { dontAddToDocument: true }));
          });

          this.createSeparator();
        });
      }
    }
  }
}
