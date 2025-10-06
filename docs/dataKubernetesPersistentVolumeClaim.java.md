# `dataKubernetesPersistentVolumeClaim` Submodule <a name="`dataKubernetesPersistentVolumeClaim` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesPersistentVolumeClaim <a name="DataKubernetesPersistentVolumeClaim" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim kubernetes_persistent_volume_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaim;

DataKubernetesPersistentVolumeClaim.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metadata(DataKubernetesPersistentVolumeClaimMetadata)
//  .id(java.lang.String)
//  .spec(IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpec>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>></code> | spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#metadata DataKubernetesPersistentVolumeClaim#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.spec"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#spec DataKubernetesPersistentVolumeClaim#spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata"></a>

```java
public void putMetadata(DataKubernetesPersistentVolumeClaimMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec"></a>

```java
public void putSpec(IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpec> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetId"></a>

```java
public void resetId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaim resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaim;

DataKubernetesPersistentVolumeClaim.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaim;

DataKubernetesPersistentVolumeClaim.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaim;

DataKubernetesPersistentVolumeClaim.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaim;

DataKubernetesPersistentVolumeClaim.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataKubernetesPersistentVolumeClaim.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataKubernetesPersistentVolumeClaim to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataKubernetesPersistentVolumeClaim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesPersistentVolumeClaim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference">DataKubernetesPersistentVolumeClaimMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList">DataKubernetesPersistentVolumeClaimSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.specInput">specInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadata"></a>

```java
public DataKubernetesPersistentVolumeClaimMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference">DataKubernetesPersistentVolumeClaimMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.spec"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecList getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList">DataKubernetesPersistentVolumeClaimSpecList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadataInput"></a>

```java
public DataKubernetesPersistentVolumeClaimMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.specInput"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpec> getSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesPersistentVolumeClaimConfig <a name="DataKubernetesPersistentVolumeClaimConfig" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimConfig;

DataKubernetesPersistentVolumeClaimConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metadata(DataKubernetesPersistentVolumeClaimMetadata)
//  .id(java.lang.String)
//  .spec(IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpec>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>></code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.metadata"></a>

```java
public DataKubernetesPersistentVolumeClaimMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#metadata DataKubernetesPersistentVolumeClaim#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.spec"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpec> getSpec();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#spec DataKubernetesPersistentVolumeClaim#spec}

---

### DataKubernetesPersistentVolumeClaimMetadata <a name="DataKubernetesPersistentVolumeClaimMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimMetadata;

DataKubernetesPersistentVolumeClaimMetadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .generateName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#annotations DataKubernetesPersistentVolumeClaim#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#generate_name DataKubernetesPersistentVolumeClaim#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#labels DataKubernetesPersistentVolumeClaim#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#name DataKubernetesPersistentVolumeClaim#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#namespace DataKubernetesPersistentVolumeClaim#namespace}

---

### DataKubernetesPersistentVolumeClaimSpec <a name="DataKubernetesPersistentVolumeClaimSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpec;

DataKubernetesPersistentVolumeClaimSpec.builder()
//  .selector(IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelector>)
//  .storageClassName(java.lang.String)
//  .volumeMode(java.lang.String)
//  .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | Defines what type of volume is required by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.selector"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelector> getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#selector DataKubernetesPersistentVolumeClaim#selector}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#storage_class_name DataKubernetesPersistentVolumeClaim#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

Defines what type of volume is required by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#volume_mode DataKubernetesPersistentVolumeClaim#volume_mode}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#volume_name DataKubernetesPersistentVolumeClaim#volume_name}

---

### DataKubernetesPersistentVolumeClaimSpecResources <a name="DataKubernetesPersistentVolumeClaimSpecResources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecResources;

DataKubernetesPersistentVolumeClaimSpecResources.builder()
    .build();
```


### DataKubernetesPersistentVolumeClaimSpecSelector <a name="DataKubernetesPersistentVolumeClaimSpecSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecSelector;

DataKubernetesPersistentVolumeClaimSpecSelector.builder()
//  .matchExpressions(IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchExpressions"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions> getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#match_expressions DataKubernetesPersistentVolumeClaim#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#match_labels DataKubernetesPersistentVolumeClaim#match_labels}

---

### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions;

DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#key DataKubernetesPersistentVolumeClaim#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#operator DataKubernetesPersistentVolumeClaim#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim#values DataKubernetesPersistentVolumeClaim#values}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesPersistentVolumeClaimMetadataOutputReference <a name="DataKubernetesPersistentVolumeClaimMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimMetadataOutputReference;

new DataKubernetesPersistentVolumeClaimMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.internalValue"></a>

```java
public DataKubernetesPersistentVolumeClaimMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---


### DataKubernetesPersistentVolumeClaimSpecList <a name="DataKubernetesPersistentVolumeClaimSpecList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecList;

new DataKubernetesPersistentVolumeClaimSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpec> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>>

---


### DataKubernetesPersistentVolumeClaimSpecOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecOutputReference;

new DataKubernetesPersistentVolumeClaimSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetStorageClassName"></a>

```java
public void resetStorageClassName()
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeMode"></a>

```java
public void resetVolumeMode()
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeName"></a>

```java
public void resetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.accessModes">accessModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList">DataKubernetesPersistentVolumeClaimSpecResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList">DataKubernetesPersistentVolumeClaimSpecSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.accessModes"></a>

```java
public java.util.List<java.lang.String> getAccessModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.resources"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList">DataKubernetesPersistentVolumeClaimSpecResourcesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selector"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList">DataKubernetesPersistentVolumeClaimSpecSelectorList</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selectorInput"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelector> getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassNameInput"></a>

```java
public java.lang.String getStorageClassNameInput();
```

- *Type:* java.lang.String

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeModeInput"></a>

```java
public java.lang.String getVolumeModeInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|DataKubernetesPersistentVolumeClaimSpec getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec">DataKubernetesPersistentVolumeClaimSpec</a>

---


### DataKubernetesPersistentVolumeClaimSpecResourcesList <a name="DataKubernetesPersistentVolumeClaimSpecResourcesList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecResourcesList;

new DataKubernetesPersistentVolumeClaimSpecResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference;

new DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.limits">limits</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.requests">requests</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources">DataKubernetesPersistentVolumeClaimSpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.limits"></a>

```java
public StringMap getLimits();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.requests"></a>

```java
public StringMap getRequests();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.internalValue"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources">DataKubernetesPersistentVolumeClaimSpecResources</a>

---


### DataKubernetesPersistentVolumeClaimSpecSelectorList <a name="DataKubernetesPersistentVolumeClaimSpecSelectorList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecSelectorList;

new DataKubernetesPersistentVolumeClaimSpecSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelector> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>>

---


### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList;

new DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>>

---


### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference;

new DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>

---


### DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference;

new DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions"></a>

```java
public DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public IResolvable|java.util.List<DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions> getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.internalValue"></a>

```java
public IResolvable|DataKubernetesPersistentVolumeClaimSpecSelector getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector">DataKubernetesPersistentVolumeClaimSpecSelector</a>

---



