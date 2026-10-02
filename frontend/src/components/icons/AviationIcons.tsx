import React from 'react'
import {
  RiFlightTakeoffLine,
  RiHotelBedLine,
  RiCompass3Line,
  RiPassportLine,
  RiCarLine,
  RiBuilding4Line,
  RiShieldCheckLine,
  RiGlobalLine,
} from 'react-icons/ri'
import {
  HiPaperAirplane,
  HiBuildingOffice2,
  HiCheckBadge,
  HiGlobeAlt,
} from 'react-icons/hi2'

interface IconProps {
  className?: string
  size?: number
}

export const AirTicketingIcon = ({ className = '', size = 24 }: IconProps) => (
  <RiFlightTakeoffLine size={size} className={className} />
)

export const HotelBookingsIcon = ({ className = '', size = 24 }: IconProps) => (
  <RiHotelBedLine size={size} className={className} />
)

export const CuratedToursIcon = ({ className = '', size = 24 }: IconProps) => (
  <RiCompass3Line size={size} className={className} />
)

export const VisaIcon = ({ className = '', size = 24 }: IconProps) => (
  <RiPassportLine size={size} className={className} />
)

export const CarHireIcon = ({ className = '', size = 24 }: IconProps) => (
  <RiCarLine size={size} className={className} />
)

export const CorporateTravelIcon = ({ className = '', size = 24 }: IconProps) => (
  <RiBuilding4Line size={size} className={className} />
)

export const PartnerTailFin = ({ className = '', size = 24 }: IconProps) => (
  <HiPaperAirplane size={size} className={className} />
)

export const PartnerHotelBadge = ({ className = '', size = 24 }: IconProps) => (
  <HiBuildingOffice2 size={size} className={className} />
)

export const PartnerGlobeBadge = ({ className = '', size = 24 }: IconProps) => (
  <HiGlobeAlt size={size} className={className} />
)

export const VerifiedBadgeIcon = ({ className = '', size = 24 }: IconProps) => (
  <HiCheckBadge size={size} className={className} />
)
