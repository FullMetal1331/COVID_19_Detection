# COVID-19 Detection from chest X-rays
Title : Ensemble Model for COVID-19 detection from chest X-ray scans using image segmentation, fuzzy color and stacking approaches

Authors:
Saksham Tewari, 
Utkarsh Agrawal, 
Siddharth Verma

Abstract:
Coronavirus is a virus of RNA-type that can infect both humans and animal and causes a wide variety of respiratory infections. 
In humans, it also causes pneumonia. Since coronavirus has been declared a pandemic, Reverse Transcription Polymerase Chain Reaction (RT-PCR) 
has been the standard method for detection but is a time consuming operation and due to sudden surge in demand it has a high cost. 
In this study, coronavirus was detected from X-ray scans of chest using a deep learning model consisting of fuzzy image enhancement, 
offline data augmentation, image segmentation and classification through Convolutional Neural Network. Image segmentation model was was based on U-Net Architecture
and involved image processing and merging to reduce model complexity while maintaining accuracy. For training and classification, 
an ensembeled model consisting of the features of VGG-16, ResNet-50 and MobileNetV2 was built and optimized with bayesian optimization. 
The proposed model achieved an overall accuracy of 96.34%. The precision, recall and F1-Score for COVID-19 class was 100%, 96% and 98% respectively.

Important Links:
1) Ensemble model and Segmentation model: https://drive.google.com/drive/folders/10D4Jx_zh0FPvqhsSDE1gaz5ZLy1dIzGN?usp=sharing
2) Original Dataset: https://drive.google.com/drive/folders/1fC8rMoUd1CYASjeZVK8z0evkhkCDq1fk?usp=sharing
3) Final Dataset: https://drive.google.com/drive/folders/1dWzsyD31wO5GlFJB3-0q6ZvggNQSi74R?usp=sharing
