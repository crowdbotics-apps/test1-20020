from rest_framework import serializers
from wallet.models import UserWallet, PaymentMethod, DriverWallet


class PaymentMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentMethod
        fields = "__all__"


class DriverWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriverWallet
        fields = "__all__"


class UserWalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWallet
        fields = "__all__"
