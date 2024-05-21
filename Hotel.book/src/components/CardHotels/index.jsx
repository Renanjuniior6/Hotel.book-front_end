import { HeartStraight, MapPin } from "@phosphor-icons/react"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { useFavorite } from "../../hooks/FavoriteContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { Discount } from "./Discount"
import { Container, BoxUp, BoxDown, Paragraph, Info } from "./styles"

export function CardHotels({ hotel, offer }) {
  const { putInFavorites } = useFavorite()

  const navigate = useNavigate()
  const [value, setValue] = useState()

  const { pathname } = useLocation()

  function getId(id) {
    if (pathname === "/hotels") {
      navigate(`/detailhotel/${id}`)
    } else {
      navigate(`/detailhotel/${id}`)
      location.reload()
    }
  }

  function isActive(fill) {
    const user = localStorage.getItem("hotelbook:userData")

    if (!user) {
      navigate("/login")
    } else if (fill === value) {
      setValue("regular")
    } else {
      setValue(fill)
    }
  }

  useEffect(() => {
    const uploadLocalStorage = async () => {
      const favoriteInfo = await localStorage.getItem("hotelbook:favoriteInfo")

      if (favoriteInfo.includes(`"name":"${hotel.name}"`)) {
        setValue("fill")
      } else {
        setValue("regular")
      }
    }

    uploadLocalStorage()
  }, [])

  return (
    <Container>
      {hotel.offer === true && <Discount />}
      <img src={hotel.url} onClick={() => getId(hotel.id)} />
      <BoxUp>
        <Paragraph isOffer={offer}>
          <p>{hotel.name}</p>
          <b>{formatCurrency(hotel.price)}</b>
        </Paragraph>
        <HeartStraight
          size={28}
          style={{ marginRight: 10 }}
          onClick={() => {
            isActive("fill")
            putInFavorites(hotel, "fill")
          }}
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
  hotel: PropTypes.object,
  offer: PropTypes.bool,
}
