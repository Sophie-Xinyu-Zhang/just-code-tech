import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Payment = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'Payment Plans',
    paragraph:
      'The cohort will run for a total of 3 months. But we understand that there are different needs to every individual. Thus, we have three plans. If you have any questions, we highly recommend to check out the FAQ: ',
    link:
      'https://justinlinpersonal.notion.site/FAQ-957963f2b3c740ad84f7d2a1a63973c0'
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-footer text-xs mb-0 '>
                  <span className='testimonial-item-name text-color-high'>
                    Roman Level
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>AppName</a>
                  </span>
                </div>
                <div>
                  <p className='text-sm mb-0'>
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='testimonial-item-footer text-xs mb-0 '>
                  <span className='testimonial-item-name text-color-high'>
                    Roman Level
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>AppName</a>
                  </span>
                </div>
                <div>
                  <p className='text-sm mb-0'>
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-footer text-xs mb-0 '>
                  <span className='testimonial-item-name text-color-high'>
                    Roman Level
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>AppName</a>
                  </span>
                </div>
                <div>
                  <p className='text-sm mb-0'>
                    — Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum cillum dolore eu fugiat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Payment.propTypes = propTypes
Payment.defaultProps = defaultProps

export default Payment
