import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AvailableProduct } from "@/types";

interface ProductSelectionModalProps {
  visible: boolean;
  title?: string;
  products: AvailableProduct[];
  onClose: () => void;
  onSelectProduct: (product: AvailableProduct) => void;
  showDividers?: boolean;
}

const ProductSelectionModal: React.FC<ProductSelectionModalProps> = ({
  visible = false,
  title = "Item Produk",
  products = [],
  onClose,
  onSelectProduct,
  showDividers = true,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(visible);

  // Handle visibility changes
  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      // Fade in
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 550, // 0.5 detik
        useNativeDriver: false,
      }).start();
    } else {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200, // Lebih cepat dari fade in (0.2 detik)
        useNativeDriver: false,
      }).start(() => {
        // Setelah animasi selesai, baru sembunyikan modal
        setModalVisible(false);
      });
    }
  }, [visible]);

  // Penanganan penutupan kustom
  const handleClose = () => {
    onClose();
  };

  // Interpolasi nilai animasi
  const backgroundColor = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"],
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleClose}
    >
      <Animated.View style={[styles.modalContainer, { backgroundColor }]}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{title}</Text>
          </View>

          <ScrollView>
            {products.map((product, index) => (
              <View key={product.id}>
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    onSelectProduct(product);
                    handleClose();
                  }}
                >
                  <Text style={styles.modalItemText}>{product.name}</Text>
                </TouchableOpacity>

                {showDividers && index < products.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            ))}

            {products.length === 0 && (
              <Text style={styles.emptyText}>Tidak ada produk tersedia</Text>
            )}
          </ScrollView>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // Warna background akan diatur melalui animasi
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 60,
    flex: 1,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  closeButton: {
    padding: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  modalItem: {
    padding: 16,
  },
  modalItemText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  emptyText: {
    textAlign: "center",
    color: "#6E6E6E",
    marginTop: 16,
    marginBottom: 16,
  },
});

export default ProductSelectionModal;
