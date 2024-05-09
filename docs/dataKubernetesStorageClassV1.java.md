# `dataKubernetesStorageClassV1` Submodule <a name="`dataKubernetesStorageClassV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClassV1 <a name="DataKubernetesStorageClassV1" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1 kubernetes_storage_class_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1;

DataKubernetesStorageClassV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(DataKubernetesStorageClassV1Metadata)
//  .allowedTopologies(DataKubernetesStorageClassV1AllowedTopologies)
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.volumeBindingMode">volumeBindingMode</a></code> | <code>java.lang.String</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#metadata DataKubernetesStorageClassV1#metadata}

---

##### `allowedTopologies`<sup>Optional</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowedTopologies"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#allowed_topologies DataKubernetesStorageClassV1#allowed_topologies}

---

##### `allowVolumeExpansion`<sup>Optional</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.allowVolumeExpansion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#allow_volume_expansion DataKubernetesStorageClassV1#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.mountOptions"></a>

- *Type:* java.util.List<java.lang.String>

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#mount_options DataKubernetesStorageClassV1#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#parameters DataKubernetesStorageClassV1#parameters}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.reclaimPolicy"></a>

- *Type:* java.lang.String

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#reclaim_policy DataKubernetesStorageClassV1#reclaim_policy}

---

##### `volumeBindingMode`<sup>Optional</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.volumeBindingMode"></a>

- *Type:* java.lang.String

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#volume_binding_mode DataKubernetesStorageClassV1#volume_binding_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies">putAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies">resetAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion">resetAllowVolumeExpansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy">resetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode">resetVolumeBindingMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAllowedTopologies` <a name="putAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies"></a>

```java
public void putAllowedTopologies(DataKubernetesStorageClassV1AllowedTopologies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata"></a>

```java
public void putMetadata(DataKubernetesStorageClassV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---

##### `resetAllowedTopologies` <a name="resetAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies"></a>

```java
public void resetAllowedTopologies()
```

##### `resetAllowVolumeExpansion` <a name="resetAllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion"></a>

```java
public void resetAllowVolumeExpansion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId"></a>

```java
public void resetId()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetReclaimPolicy` <a name="resetReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy"></a>

```java
public void resetReclaimPolicy()
```

##### `resetVolumeBindingMode` <a name="resetVolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode"></a>

```java
public void resetVolumeBindingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesStorageClassV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1;

DataKubernetesStorageClassV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1;

DataKubernetesStorageClassV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1;

DataKubernetesStorageClassV1.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1;

DataKubernetesStorageClassV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataKubernetesStorageClassV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataKubernetesStorageClassV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataKubernetesStorageClassV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataKubernetesStorageClassV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesStorageClassV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner">storageProvisioner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput">allowedTopologiesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput">allowVolumeExpansionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput">reclaimPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput">volumeBindingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode">volumeBindingMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowedTopologies`<sup>Required</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies"></a>

```java
public DataKubernetesStorageClassV1AllowedTopologiesOutputReference getAllowedTopologies();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata"></a>

```java
public DataKubernetesStorageClassV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a>

---

##### `storageProvisioner`<sup>Required</sup> <a name="storageProvisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner"></a>

```java
public java.lang.String getStorageProvisioner();
```

- *Type:* java.lang.String

---

##### `allowedTopologiesInput`<sup>Optional</sup> <a name="allowedTopologiesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput"></a>

```java
public DataKubernetesStorageClassV1AllowedTopologies getAllowedTopologiesInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---

##### `allowVolumeExpansionInput`<sup>Optional</sup> <a name="allowVolumeExpansionInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput"></a>

```java
public java.lang.Object getAllowVolumeExpansionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput"></a>

```java
public DataKubernetesStorageClassV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMountOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `reclaimPolicyInput`<sup>Optional</sup> <a name="reclaimPolicyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput"></a>

```java
public java.lang.String getReclaimPolicyInput();
```

- *Type:* java.lang.String

---

##### `volumeBindingModeInput`<sup>Optional</sup> <a name="volumeBindingModeInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput"></a>

```java
public java.lang.String getVolumeBindingModeInput();
```

- *Type:* java.lang.String

---

##### `allowVolumeExpansion`<sup>Required</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion"></a>

```java
public java.lang.Object getAllowVolumeExpansion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `reclaimPolicy`<sup>Required</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

---

##### `volumeBindingMode`<sup>Required</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode"></a>

```java
public java.lang.String getVolumeBindingMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassV1AllowedTopologies <a name="DataKubernetesStorageClassV1AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1AllowedTopologies;

DataKubernetesStorageClassV1AllowedTopologies.builder()
//  .matchLabelExpressions(IResolvable)
//  .matchLabelExpressions(java.util.List<DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions">matchLabelExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>></code> | match_label_expressions block. |

---

##### `matchLabelExpressions`<sup>Optional</sup> <a name="matchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions"></a>

```java
public java.lang.Object getMatchLabelExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>>

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#match_label_expressions DataKubernetesStorageClassV1#match_label_expressions}

---

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions;

DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. One value must match the label to be selected. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#key DataKubernetesStorageClassV1#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#values DataKubernetesStorageClassV1#values}

---

### DataKubernetesStorageClassV1Config <a name="DataKubernetesStorageClassV1Config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1Config;

DataKubernetesStorageClassV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(DataKubernetesStorageClassV1Metadata)
//  .allowedTopologies(DataKubernetesStorageClassV1AllowedTopologies)
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies">allowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion">allowVolumeExpansion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy">reclaimPolicy</a></code> | <code>java.lang.String</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode">volumeBindingMode</a></code> | <code>java.lang.String</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata"></a>

```java
public DataKubernetesStorageClassV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#metadata DataKubernetesStorageClassV1#metadata}

---

##### `allowedTopologies`<sup>Optional</sup> <a name="allowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies"></a>

```java
public DataKubernetesStorageClassV1AllowedTopologies getAllowedTopologies();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#allowed_topologies DataKubernetesStorageClassV1#allowed_topologies}

---

##### `allowVolumeExpansion`<sup>Optional</sup> <a name="allowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion"></a>

```java
public java.lang.Object getAllowVolumeExpansion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#allow_volume_expansion DataKubernetesStorageClassV1#allow_volume_expansion}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#mount_options DataKubernetesStorageClassV1#mount_options}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#parameters DataKubernetesStorageClassV1#parameters}

---

##### `reclaimPolicy`<sup>Optional</sup> <a name="reclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy"></a>

```java
public java.lang.String getReclaimPolicy();
```

- *Type:* java.lang.String

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#reclaim_policy DataKubernetesStorageClassV1#reclaim_policy}

---

##### `volumeBindingMode`<sup>Optional</sup> <a name="volumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode"></a>

```java
public java.lang.String getVolumeBindingMode();
```

- *Type:* java.lang.String

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#volume_binding_mode DataKubernetesStorageClassV1#volume_binding_mode}

---

### DataKubernetesStorageClassV1Metadata <a name="DataKubernetesStorageClassV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1Metadata;

DataKubernetesStorageClassV1Metadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#annotations DataKubernetesStorageClassV1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#labels DataKubernetesStorageClassV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/data-sources/storage_class_v1#name DataKubernetesStorageClassV1#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList;

new DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get"></a>

```java
public DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>>

---


### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference;

new DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>

---


### DataKubernetesStorageClassV1AllowedTopologiesOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference;

new DataKubernetesStorageClassV1AllowedTopologiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions">putMatchLabelExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions">resetMatchLabelExpressions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchLabelExpressions` <a name="putMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```java
public void putMatchLabelExpressions(IResolvable OR java.util.List<DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>>

---

##### `resetMatchLabelExpressions` <a name="resetMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```java
public void resetMatchLabelExpressions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions">matchLabelExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput">matchLabelExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchLabelExpressions`<sup>Required</sup> <a name="matchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```java
public DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList getMatchLabelExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a>

---

##### `matchLabelExpressionsInput`<sup>Optional</sup> <a name="matchLabelExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```java
public java.lang.Object getMatchLabelExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue"></a>

```java
public DataKubernetesStorageClassV1AllowedTopologies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---


### DataKubernetesStorageClassV1MetadataOutputReference <a name="DataKubernetesStorageClassV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_storage_class_v1.DataKubernetesStorageClassV1MetadataOutputReference;

new DataKubernetesStorageClassV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue"></a>

```java
public DataKubernetesStorageClassV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---



