import tensorflow as tf
import numpy as np
import time
import cv2
from math import e
import datetime
import os

from keras.preprocessing.image import ImageDataGenerator
from keras.preprocessing import image
from keras.layers import GlobalAveragePooling2D, Dense, Dropout, Activation, Flatten
from keras.layers import Input
from keras.models import Model
from keras.layers.merge import concatenate
from keras.utils import plot_model
from keras.callbacks import ModelCheckpoint
from keras.models import load_model

from tensorflow.keras.applications.xception import Xception
import sys

from PIL import Image  
import PIL

dir=r"C:/Users/Utkarsh/Desktop/BTP_backend/test_images/"

os.chdir(dir)
#######Fuzzy Enhancement#######


img = cv2.imread(sys.argv[1], 0)

img=cv2.medianBlur(img, 3)
rows,cols = img.shape
shape = rows*cols
x = img.reshape(shape)
mv = np.zeros(shape)
enh =np.zeros(shape)
for j in range(shape):
	if x[j]<100:
	  mv[j]=0
	elif x[j]>=100 and x[j]<=200:
	  mv[j]=(0.01*x[j])-1
	elif x[j]>200 and x[j]<=255:
	  mv[j]=1
Mb=2
g_max = np.amax(x)
m=g_max/(0.367879-1)
for j in range(shape):
	power=mv[j]**Mb
	enh[j]=m*(e**(-1*power)-1)
en_img=enh.reshape(rows, cols)
#filename = str(datetime.datetime.now()) + ".png"
filename=sys.argv[2]


cv2.imwrite(filename, en_img)
###############################
# use sys.argv[1] for path of the image to be tested

path = "C:/Users/Utkarsh/Desktop/BTP_backend/test_images/" + filename
classifier = load_model("C:/Users/Utkarsh/Desktop/BTP_backend/python/final_model.hdf5")
#test_image = image.load_img("C:/Users/Utkarsh/Desktop/1.jpeg", target_size = (224, 224))
test_image = image.load_img(path, target_size = (224, 224))
test_image = image.img_to_array(test_image)
test_image = np.expand_dims(test_image, axis = 0)
result = classifier.predict(test_image)
print(result)

sys.stdout.flush()