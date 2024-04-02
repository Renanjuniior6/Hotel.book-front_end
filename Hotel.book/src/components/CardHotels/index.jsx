import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import React from "react"

import { formatCurrency } from "../../utils/formatCurrency"
import { Container, BoxUp, BoxDown, Paragraph, Info } from "./styles"

function CardHotels({ hotel }) {
  return (
    <Container>
      <img src={hotel.url} />
      <BoxUp>
        <Paragraph>
          <p>{hotel.name}</p>
          <b>{formatCurrency(hotel.price)}</b>
        </Paragraph>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ height: "1.25rem", marginRight: "0.3125rem" }}
        />
      </BoxUp>
      <BoxDown>
        <Info>
          <b>{`${hotel.squareMeters}m²`}</b>
          <b>-</b>
          <b>{hotel.rooms} quartos</b>
          <b>-</b>
          <b>
            {hotel.city.name} <FontAwesomeIcon icon={faLocationDot} />
          </b>
        </Info>
      </BoxDown>
    </Container>
  )
}

CardHotels.propTypes = {
  hotel: PropTypes.string,
}

export default CardHotels
