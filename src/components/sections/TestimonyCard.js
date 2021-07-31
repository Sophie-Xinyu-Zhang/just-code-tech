import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const TestimonyCard = ({
    text,
    linkedin,
    name,
    image,
    ...props
}) => {
    // Loop through icons array and render
    const renderIcons = () => {
        if (image) {
            // Loop through image array and render image url into image tag
            return image.map((image, index) => {
                return (
                    // Create a span with display flex and align items center
                    <span> 
                        <img style={{display: 'inline-block'}} width="40" height="40" key={index} src={image} alt={`Testimony Card ${index}`} />
                    </span>
                    
                );
            });
        }
    }
  return (
    <div className="tiles-item reveal-from-left" data-reveal-delay="200">
        <div className="tiles-item-inner">
        <div className="testimonial-item-content">
            <p className="text-sm mb-0">
            {text}
            </p>
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
            <span className="testimonial-item-name text-color-high">{name}</span>
            <span className="text-color-low"> / </span>
            <span className="testimonial-item-link">
            <a href={linkedin}>Linkedin</a>
            {renderIcons()}
            </span>
        </div>
        </div>
    </div>
  );
}

TestimonyCard.propTypes = propTypes;
TestimonyCard.defaultProps = defaultProps;

export default TestimonyCard;