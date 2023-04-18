# `data_kubernetes_storage_class`

Refer to the Terraform Registory for docs: [`data_kubernetes_storage_class`](https://www.terraform.io/docs/providers/kubernetes/d/storage_class).

# `dataKubernetesStorageClass` Submodule <a name="`dataKubernetesStorageClass` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClass <a name="DataKubernetesStorageClass" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class kubernetes_storage_class}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClass;

DataKubernetesStorageClass.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(DataKubernetesStorageClassMetadata)
//  .allowedTopologies(DataKubernetesStorageClassAllowedTopologies)
//  .allowVolumeExpansion(java.lang.Boolean)
//  .allowVolumeExpansion(IResolvable)
//  .id(java.lang.String)
//  .mountOptions(java.util.List<java.lang.String>)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .reclaimPolicy(java.lang.String)
//  .volumeBindingMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#id DataKubernetesStorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.volumeBindingMode">volumeBindingMode</a></code> | <code>java.lang.String</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#metadata DataKubernetesStorageClass#metadata}

---

##### `allowedTopologies`<sup>Optional</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowedTopologies"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#allowed_topologies DataKubernetesStorageClass#allowed_topologies}

---

##### `allowVolumeExpansion`<sup>Optional</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.allowVolumeExpansion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#allow_volume_expansion DataKubernetesStorageClass#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#id DataKubernetesStorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.mountOptions"></a>

- *Type:* java.util.List<java.lang.String>

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#mount_options DataKubernetesStorageClass#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#parameters DataKubernetesStorageClass#parameters}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.reclaimPolicy"></a>

- *Type:* java.lang.String

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#reclaim_policy DataKubernetesStorageClass#reclaim_policy}

---

##### `volumeBindingMode`<sup>Optional</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.Initializer.parameter.volumeBindingMode"></a>

- *Type:* java.lang.String

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#volume_binding_mode DataKubernetesStorageClass#volume_binding_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies">putAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies">resetAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion">resetAllowVolumeExpansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy">resetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode">resetVolumeBindingMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAllowedTopologies` <a name="putAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies"></a>

```java
public void putAllowedTopologies(DataKubernetesStorageClassAllowedTopologies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putAllowedTopologies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata"></a>

```java
public void putMetadata(DataKubernetesStorageClassMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---

##### `resetAllowedTopologies` <a name="resetAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowedTopologies"></a>

```java
public void resetAllowedTopologies()
```

##### `resetAllowVolumeExpansion` <a name="resetAllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetAllowVolumeExpansion"></a>

```java
public void resetAllowVolumeExpansion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetId"></a>

```java
public void resetId()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetReclaimPolicy` <a name="resetReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetReclaimPolicy"></a>

```java
public void resetReclaimPolicy()
```

##### `resetVolumeBindingMode` <a name="resetVolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.resetVolumeBindingMode"></a>

```java
public void resetVolumeBindingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClass;

DataKubernetesStorageClass.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClass;

DataKubernetesStorageClass.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClass;

DataKubernetesStorageClass.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner">storageProvisioner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput">allowedTopologiesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput">allowVolumeExpansionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput">reclaimPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput">volumeBindingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode">volumeBindingMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowedTopologies`<sup>Required</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologies"></a>

```java
public DataKubernetesStorageClassAllowedTopologiesOutputReference getAllowedTopologies();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference">DataKubernetesStorageClassAllowedTopologiesOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadata"></a>

```java
public DataKubernetesStorageClassMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference">DataKubernetesStorageClassMetadataOutputReference</a>

---

##### `storageProvisioner`<sup>Required</sup> <a name="storageProvisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.storageProvisioner"></a>

```java
public java.lang.String getStorageProvisioner();
```

- *Type:* java.lang.String

---

##### `allowedTopologiesInput`<sup>Optional</sup> <a name="allowedTopologiesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowedTopologiesInput"></a>

```java
public DataKubernetesStorageClassAllowedTopologies getAllowedTopologiesInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---

##### `allowVolumeExpansionInput`<sup>Optional</sup> <a name="allowVolumeExpansionInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansionInput"></a>

```java
public java.lang.Object getAllowVolumeExpansionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.metadataInput"></a>

```java
public DataKubernetesStorageClassMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMountOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `reclaimPolicyInput`<sup>Optional</sup> <a name="reclaimPolicyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicyInput"></a>

```java
public java.lang.String getReclaimPolicyInput();
```

- *Type:* java.lang.String

---

##### `volumeBindingModeInput`<sup>Optional</sup> <a name="volumeBindingModeInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingModeInput"></a>

```java
public java.lang.String getVolumeBindingModeInput();
```

- *Type:* java.lang.String

---

##### `allowVolumeExpansion`<sup>Required</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.allowVolumeExpansion"></a>

```java
public java.lang.Object getAllowVolumeExpansion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `reclaimPolicy`<sup>Required</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

---

##### `volumeBindingMode`<sup>Required</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.volumeBindingMode"></a>

```java
public java.lang.String getVolumeBindingMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClass.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassAllowedTopologies <a name="DataKubernetesStorageClassAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassAllowedTopologies;

DataKubernetesStorageClassAllowedTopologies.builder()
//  .matchLabelExpressions(IResolvable)
//  .matchLabelExpressions(java.util.List<DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions">matchLabelExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>></code> | match_label_expressions block. |

---

##### `matchLabelExpressions`<sup>Optional</sup> <a name="matchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies.property.matchLabelExpressions"></a>

```java
public java.lang.Object getMatchLabelExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>>

match_label_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#match_label_expressions DataKubernetesStorageClass#match_label_expressions}

---

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions;

DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. One value must match the label to be selected. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#key DataKubernetesStorageClass#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#values DataKubernetesStorageClass#values}

---

### DataKubernetesStorageClassConfig <a name="DataKubernetesStorageClassConfig" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassConfig;

DataKubernetesStorageClassConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(DataKubernetesStorageClassMetadata)
//  .allowedTopologies(DataKubernetesStorageClassAllowedTopologies)
//  .allowVolumeExpansion(java.lang.Boolean)
//  .allowVolumeExpansion(IResolvable)
//  .id(java.lang.String)
//  .mountOptions(java.util.List<java.lang.String>)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .reclaimPolicy(java.lang.String)
//  .volumeBindingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#id DataKubernetesStorageClass#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode">volumeBindingMode</a></code> | <code>java.lang.String</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.metadata"></a>

```java
public DataKubernetesStorageClassMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#metadata DataKubernetesStorageClass#metadata}

---

##### `allowedTopologies`<sup>Optional</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowedTopologies"></a>

```java
public DataKubernetesStorageClassAllowedTopologies getAllowedTopologies();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#allowed_topologies DataKubernetesStorageClass#allowed_topologies}

---

##### `allowVolumeExpansion`<sup>Optional</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.allowVolumeExpansion"></a>

```java
public java.lang.Object getAllowVolumeExpansion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#allow_volume_expansion DataKubernetesStorageClass#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#id DataKubernetesStorageClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#mount_options DataKubernetesStorageClass#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#parameters DataKubernetesStorageClass#parameters}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#reclaim_policy DataKubernetesStorageClass#reclaim_policy}

---

##### `volumeBindingMode`<sup>Optional</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassConfig.property.volumeBindingMode"></a>

```java
public java.lang.String getVolumeBindingMode();
```

- *Type:* java.lang.String

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#volume_binding_mode DataKubernetesStorageClass#volume_binding_mode}

---

### DataKubernetesStorageClassMetadata <a name="DataKubernetesStorageClassMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassMetadata;

DataKubernetesStorageClassMetadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#annotations DataKubernetesStorageClass#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#labels DataKubernetesStorageClass#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#name DataKubernetesStorageClass#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList;

new DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get"></a>

```java
public DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>>

---


### DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference;

new DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### DataKubernetesStorageClassAllowedTopologiesOutputReference <a name="DataKubernetesStorageClassAllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassAllowedTopologiesOutputReference;

new DataKubernetesStorageClassAllowedTopologiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions">putMatchLabelExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions">resetMatchLabelExpressions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchLabelExpressions` <a name="putMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```java
public void putMatchLabelExpressions(IResolvable OR java.util.List<DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>>

---

##### `resetMatchLabelExpressions` <a name="resetMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```java
public void resetMatchLabelExpressions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions">matchLabelExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput">matchLabelExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchLabelExpressions`<sup>Required</sup> <a name="matchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```java
public DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList getMatchLabelExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsList</a>

---

##### `matchLabelExpressionsInput`<sup>Optional</sup> <a name="matchLabelExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```java
public java.lang.Object getMatchLabelExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologiesOutputReference.property.internalValue"></a>

```java
public DataKubernetesStorageClassAllowedTopologies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassAllowedTopologies">DataKubernetesStorageClassAllowedTopologies</a>

---


### DataKubernetesStorageClassMetadataOutputReference <a name="DataKubernetesStorageClassMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class.DataKubernetesStorageClassMetadataOutputReference;

new DataKubernetesStorageClassMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadataOutputReference.property.internalValue"></a>

```java
public DataKubernetesStorageClassMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClass.DataKubernetesStorageClassMetadata">DataKubernetesStorageClassMetadata</a>

---



