# `dataKubernetesPersistentVolumeClaimV1` Submodule <a name="`dataKubernetesPersistentVolumeClaimV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesPersistentVolumeClaimV1 <a name="DataKubernetesPersistentVolumeClaimV1" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1 kubernetes_persistent_volume_claim_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1;

DataKubernetesPersistentVolumeClaimV1.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(DataKubernetesPersistentVolumeClaimV1Metadata)
//  .id(java.lang.String)
//  .spec(IResolvable)
//  .spec(java.util.List<DataKubernetesPersistentVolumeClaimV1Spec>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#id DataKubernetesPersistentVolumeClaimV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>></code> | spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#metadata DataKubernetesPersistentVolumeClaimV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#id DataKubernetesPersistentVolumeClaimV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.Initializer.parameter.spec"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#spec DataKubernetesPersistentVolumeClaimV1#spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putMetadata"></a>

```java
public void putMetadata(DataKubernetesPersistentVolumeClaimV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putSpec"></a>

```java
public void putSpec(IResolvable OR java.util.List<DataKubernetesPersistentVolumeClaimV1Spec> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.putSpec.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetId"></a>

```java
public void resetId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1;

DataKubernetesPersistentVolumeClaimV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1;

DataKubernetesPersistentVolumeClaimV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1;

DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1;

DataKubernetesPersistentVolumeClaimV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataKubernetesPersistentVolumeClaimV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataKubernetesPersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataKubernetesPersistentVolumeClaimV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataKubernetesPersistentVolumeClaimV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesPersistentVolumeClaimV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference">DataKubernetesPersistentVolumeClaimV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList">DataKubernetesPersistentVolumeClaimV1SpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.specInput">specInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadata"></a>

```java
public DataKubernetesPersistentVolumeClaimV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference">DataKubernetesPersistentVolumeClaimV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.spec"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecList getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList">DataKubernetesPersistentVolumeClaimV1SpecList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.metadataInput"></a>

```java
public DataKubernetesPersistentVolumeClaimV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.specInput"></a>

```java
public java.lang.Object getSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesPersistentVolumeClaimV1Config <a name="DataKubernetesPersistentVolumeClaimV1Config" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1Config;

DataKubernetesPersistentVolumeClaimV1Config.builder()
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
    .metadata(DataKubernetesPersistentVolumeClaimV1Metadata)
//  .id(java.lang.String)
//  .spec(IResolvable)
//  .spec(java.util.List<DataKubernetesPersistentVolumeClaimV1Spec>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#id DataKubernetesPersistentVolumeClaimV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>></code> | spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.metadata"></a>

```java
public DataKubernetesPersistentVolumeClaimV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#metadata DataKubernetesPersistentVolumeClaimV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#id DataKubernetesPersistentVolumeClaimV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Config.property.spec"></a>

```java
public java.lang.Object getSpec();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#spec DataKubernetesPersistentVolumeClaimV1#spec}

---

### DataKubernetesPersistentVolumeClaimV1Metadata <a name="DataKubernetesPersistentVolumeClaimV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1Metadata;

DataKubernetesPersistentVolumeClaimV1Metadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#annotations DataKubernetesPersistentVolumeClaimV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#generate_name DataKubernetesPersistentVolumeClaimV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#labels DataKubernetesPersistentVolumeClaimV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#name DataKubernetesPersistentVolumeClaimV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#namespace DataKubernetesPersistentVolumeClaimV1#namespace}

---

### DataKubernetesPersistentVolumeClaimV1Spec <a name="DataKubernetesPersistentVolumeClaimV1Spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1Spec;

DataKubernetesPersistentVolumeClaimV1Spec.builder()
//  .selector(IResolvable)
//  .selector(java.util.List<DataKubernetesPersistentVolumeClaimV1SpecSelector>)
//  .storageClassName(java.lang.String)
//  .volumeMode(java.lang.String)
//  .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | Defines what type of volume is required by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.selector"></a>

```java
public java.lang.Object getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#selector DataKubernetesPersistentVolumeClaimV1#selector}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#storage_class_name DataKubernetesPersistentVolumeClaimV1#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

Defines what type of volume is required by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#volume_mode DataKubernetesPersistentVolumeClaimV1#volume_mode}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#volume_name DataKubernetesPersistentVolumeClaimV1#volume_name}

---

### DataKubernetesPersistentVolumeClaimV1SpecResources <a name="DataKubernetesPersistentVolumeClaimV1SpecResources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecResources;

DataKubernetesPersistentVolumeClaimV1SpecResources.builder()
    .build();
```


### DataKubernetesPersistentVolumeClaimV1SpecSelector <a name="DataKubernetesPersistentVolumeClaimV1SpecSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecSelector;

DataKubernetesPersistentVolumeClaimV1SpecSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#match_expressions DataKubernetesPersistentVolumeClaimV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#match_labels DataKubernetesPersistentVolumeClaimV1#match_labels}

---

### DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions;

DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#key DataKubernetesPersistentVolumeClaimV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#operator DataKubernetesPersistentVolumeClaimV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/persistent_volume_claim_v1#values DataKubernetesPersistentVolumeClaimV1#values}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesPersistentVolumeClaimV1MetadataOutputReference <a name="DataKubernetesPersistentVolumeClaimV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference;

new DataKubernetesPersistentVolumeClaimV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1MetadataOutputReference.property.internalValue"></a>

```java
public DataKubernetesPersistentVolumeClaimV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Metadata">DataKubernetesPersistentVolumeClaimV1Metadata</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecList <a name="DataKubernetesPersistentVolumeClaimV1SpecList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecList;

new DataKubernetesPersistentVolumeClaimV1SpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>>

---


### DataKubernetesPersistentVolumeClaimV1SpecOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference;

new DataKubernetesPersistentVolumeClaimV1SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable OR java.util.List<DataKubernetesPersistentVolumeClaimV1SpecSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetStorageClassName"></a>

```java
public void resetStorageClassName()
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetVolumeMode"></a>

```java
public void resetVolumeMode()
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.resetVolumeName"></a>

```java
public void resetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.accessModes">accessModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList">DataKubernetesPersistentVolumeClaimV1SpecResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList">DataKubernetesPersistentVolumeClaimV1SpecSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.accessModes"></a>

```java
public java.util.List<java.lang.String> getAccessModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.resources"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList">DataKubernetesPersistentVolumeClaimV1SpecResourcesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selector"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList">DataKubernetesPersistentVolumeClaimV1SpecSelectorList</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.selectorInput"></a>

```java
public java.lang.Object getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput"></a>

```java
public java.lang.String getStorageClassNameInput();
```

- *Type:* java.lang.String

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeModeInput"></a>

```java
public java.lang.String getVolumeModeInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1Spec">DataKubernetesPersistentVolumeClaimV1Spec</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecResourcesList <a name="DataKubernetesPersistentVolumeClaimV1SpecResourcesList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList;

new DataKubernetesPersistentVolumeClaimV1SpecResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference;

new DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.limits">limits</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.requests">requests</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources">DataKubernetesPersistentVolumeClaimV1SpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.limits"></a>

```java
public StringMap getLimits();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.requests"></a>

```java
public StringMap getRequests();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecResources">DataKubernetesPersistentVolumeClaimV1SpecResources</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorList <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList;

new DataKubernetesPersistentVolumeClaimV1SpecSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>>

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList;

new DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>>

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference;

new DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>

---


### DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference <a name="DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_persistent_volume_claim_v1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference;

new DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions"></a>

```java
public DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions">DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaimV1.DataKubernetesPersistentVolumeClaimV1SpecSelector">DataKubernetesPersistentVolumeClaimV1SpecSelector</a>

---



