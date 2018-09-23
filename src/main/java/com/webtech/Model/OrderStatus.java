package com.webtech.Model;

public enum OrderStatus {
	PAID {
      public String toString() {
          return "paid";
      }
	},

	PENDING {
      public String toString() {
          return "pending";
      }
	},
  
	CANCELLED {
      public String toString() {
          return "cancelled";
      }
	}
}
