import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: '开箱即用的终端测试 APP',
    Svg: require('@site/static/img/undraw_handcrafts_to_do.svg').default,
    description: <div>
      现代的可视化交互方式<br />
      Windows、Linux、macOS 跨平台<br />
      单机、联网 2 种运行方式
    </div>,
  },
  {
    title: '私有化部署的 SaaS 服务',
    Svg: require('@site/static/img/undraw_handcrafts_document.svg').default,
    description: <div>
      生产流程可视化配置<br />
      生产数据实时分析、预测、告警<br />
      接入各大 SAP、OA、MES 系统
    </div>,
  },
  {
    title: '全流程质量目标',
    Svg: require('@site/static/img/undraw_handcrafts_analytics.svg').default,
    description: <div>
      齐备的质量报表<br />
      适度的数据分析<br />
      为质量提升提供数据支撑
    </div>,
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
