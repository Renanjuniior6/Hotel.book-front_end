import { HeartStraight, MapPin } from "@phosphor-icons/react"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { formatCurrency } from "../../utils/formatCurrency"
import { Container, BoxUp, BoxDown, Paragraph, Info } from "./styles"

function CardHotels({ hotel }) {
  const navigate = useNavigate()
  const [value, setValue] = useState("light")

  function getId(id) {
    if (hotel) {
      navigate(`/detailhotel/${id}`)
    }
  }

  function isActive(fill) {
    if (fill === value) {
      setValue("light")
    } else {
      setValue(fill)
    }
  }

  return (
    <Container>
      <img src={hotel.url} onClick={() => getId(hotel.id)} />
      <BoxUp>
        <Paragraph>
          <p>{hotel.name}</p>
          <b>{formatCurrency(hotel.price)}</b>
        </Paragraph>
        <HeartStraight
          size={28}
          style={{ marginRight: 10 }}
          onClick={() => isActive("fill")}
          weight={value}
        />
      </BoxUp>
      <BoxDown>
        <Info>
          <b>{`${hotel.squareMeters}m²`}</b>
          <b>-</b>
          <b>
            {" "}
            {hotel.rooms > 1
              ? `${hotel.rooms} quartos`
              : `${hotel.rooms} quarto`}
          </b>
          <b>-</b>
          <b>
            <div className="icon">
              {hotel.city.name} <MapPin weight="fill" size={20} />
            </div>
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
