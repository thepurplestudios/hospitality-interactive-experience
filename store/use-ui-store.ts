import { create } from "zustand";

type UIStore = {
  isReservationOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  isReservationOpen: false,

  openReservation: () =>
    set({
      isReservationOpen: true,
    }),

  closeReservation: () =>
    set({
      isReservationOpen: false,
    }),
}));
