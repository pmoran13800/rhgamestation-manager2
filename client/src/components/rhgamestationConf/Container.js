import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { conf, post, get } from '../../api';
import RHGamestationConf from './RHGamestationConf';

class RHGamestationConfContainer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      saving: false,
      stickyContent: null,
      stickyStyle: 'danger',
    };
  }

  async componentDidMount() {
    try {
      const confData = await conf(['rhgamestation.confPath']);
      const readData = await get(
        'readFile',
        `file=${confData['rhgamestation.confPath']}`
      );

      this.setState({
        loaded: true,
        ...confData,
        ...readData,
      });
    } catch(err) {
      this.setState({
        stickyContent: err.message,
        stickyStyle: 'danger',
      });
    }
  }

  onSubmit = (values) => {
    const { t } = this.props;
    const { content } = values;

    this.setState({ saving: true });

    post('writeFile', {
      file: this.state['rhgamestation.confPath'],
      data: content,
    }).then(() => {
      this.setState({
        saving: false,
        stickyContent: t('Le fichier a bien été sauvegardé.'),
        stickyStyle: 'success',
      });
    }, () => {
      this.setState({
        saving: false,
        stickyContent: t("Il semble que votre fichier n'ait pas été sauvegardé."),
        stickyStyle: 'danger',
      });
    });
  };

  render() {
    return (
      <RHGamestationConf {...this.state} onSubmit={this.onSubmit} defaultValues={{
        'content': this.state['readFile'],
      }} confPath={this.state['rhgamestation.confPath']} />
    );
  }
}

export default translate()(RHGamestationConfContainer);
