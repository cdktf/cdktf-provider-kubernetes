# `dataKubernetesEndpointsV1` Submodule <a name="`dataKubernetesEndpointsV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointsV1 <a name="DataKubernetesEndpointsV1" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1 kubernetes_endpoints_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1;

DataKubernetesEndpointsV1.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(DataKubernetesEndpointsV1Metadata)
//  .id(java.lang.String)
//  .subset(IResolvable)
//  .subset(java.util.List<DataKubernetesEndpointsV1Subset>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.subset">subset</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>></code> | subset block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#metadata DataKubernetesEndpointsV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subset`<sup>Optional</sup> <a name="subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.Initializer.parameter.subset"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>>

subset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#subset DataKubernetesEndpointsV1#subset}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset">putSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetSubset">resetSubset</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata"></a>

```java
public void putMetadata(DataKubernetesEndpointsV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---

##### `putSubset` <a name="putSubset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset"></a>

```java
public void putSubset(IResolvable OR java.util.List<DataKubernetesEndpointsV1Subset> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.putSubset.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetId"></a>

```java
public void resetId()
```

##### `resetSubset` <a name="resetSubset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.resetSubset"></a>

```java
public void resetSubset()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesEndpointsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1;

DataKubernetesEndpointsV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1;

DataKubernetesEndpointsV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1;

DataKubernetesEndpointsV1.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1;

DataKubernetesEndpointsV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataKubernetesEndpointsV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataKubernetesEndpointsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataKubernetesEndpointsV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataKubernetesEndpointsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference">DataKubernetesEndpointsV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subset">subset</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList">DataKubernetesEndpointsV1SubsetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subsetInput">subsetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadata"></a>

```java
public DataKubernetesEndpointsV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference">DataKubernetesEndpointsV1MetadataOutputReference</a>

---

##### `subset`<sup>Required</sup> <a name="subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subset"></a>

```java
public DataKubernetesEndpointsV1SubsetList getSubset();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList">DataKubernetesEndpointsV1SubsetList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.metadataInput"></a>

```java
public DataKubernetesEndpointsV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---

##### `subsetInput`<sup>Optional</sup> <a name="subsetInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.subsetInput"></a>

```java
public java.lang.Object getSubsetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointsV1Config <a name="DataKubernetesEndpointsV1Config" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1Config;

DataKubernetesEndpointsV1Config.builder()
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
    .metadata(DataKubernetesEndpointsV1Metadata)
//  .id(java.lang.String)
//  .subset(IResolvable)
//  .subset(java.util.List<DataKubernetesEndpointsV1Subset>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.subset">subset</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>></code> | subset block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.metadata"></a>

```java
public DataKubernetesEndpointsV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#metadata DataKubernetesEndpointsV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#id DataKubernetesEndpointsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subset`<sup>Optional</sup> <a name="subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Config.property.subset"></a>

```java
public java.lang.Object getSubset();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>>

subset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#subset DataKubernetesEndpointsV1#subset}

---

### DataKubernetesEndpointsV1Metadata <a name="DataKubernetesEndpointsV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1Metadata;

DataKubernetesEndpointsV1Metadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the endpoints, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the endpoints must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the endpoints that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#annotations DataKubernetesEndpointsV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#generate_name DataKubernetesEndpointsV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoints.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#labels DataKubernetesEndpointsV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the endpoints, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#name DataKubernetesEndpointsV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the endpoints must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#namespace DataKubernetesEndpointsV1#namespace}

---

### DataKubernetesEndpointsV1Subset <a name="DataKubernetesEndpointsV1Subset" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1Subset;

DataKubernetesEndpointsV1Subset.builder()
//  .address(IResolvable)
//  .address(java.util.List<DataKubernetesEndpointsV1SubsetAddress>)
//  .notReadyAddress(IResolvable)
//  .notReadyAddress(java.util.List<DataKubernetesEndpointsV1SubsetNotReadyAddress>)
//  .port(IResolvable)
//  .port(java.util.List<DataKubernetesEndpointsV1SubsetPort>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.address">address</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>></code> | address block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.notReadyAddress">notReadyAddress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>></code> | not_ready_address block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.port">port</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>></code> | port block. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.address"></a>

```java
public java.lang.Object getAddress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#address DataKubernetesEndpointsV1#address}

---

##### `notReadyAddress`<sup>Optional</sup> <a name="notReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.notReadyAddress"></a>

```java
public java.lang.Object getNotReadyAddress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>>

not_ready_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#not_ready_address DataKubernetesEndpointsV1#not_ready_address}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset.property.port"></a>

```java
public java.lang.Object getPort();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#port DataKubernetesEndpointsV1#port}

---

### DataKubernetesEndpointsV1SubsetAddress <a name="DataKubernetesEndpointsV1SubsetAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetAddress;

DataKubernetesEndpointsV1SubsetAddress.builder()
    .ip(java.lang.String)
//  .hostname(java.lang.String)
//  .nodeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.ip">ip</a></code> | <code>java.lang.String</code> | The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The Hostname of this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | Node hosting this endpoint. This can be used to determine endpoints local to a node. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#ip DataKubernetesEndpointsV1#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The Hostname of this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#hostname DataKubernetesEndpointsV1#hostname}

---

##### `nodeName`<sup>Optional</sup> <a name="nodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

Node hosting this endpoint. This can be used to determine endpoints local to a node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#node_name DataKubernetesEndpointsV1#node_name}

---

### DataKubernetesEndpointsV1SubsetNotReadyAddress <a name="DataKubernetesEndpointsV1SubsetNotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetNotReadyAddress;

DataKubernetesEndpointsV1SubsetNotReadyAddress.builder()
    .ip(java.lang.String)
//  .hostname(java.lang.String)
//  .nodeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.ip">ip</a></code> | <code>java.lang.String</code> | The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The Hostname of this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | Node hosting this endpoint. This can be used to determine endpoints local to a node. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#ip DataKubernetesEndpointsV1#ip}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The Hostname of this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#hostname DataKubernetesEndpointsV1#hostname}

---

##### `nodeName`<sup>Optional</sup> <a name="nodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

Node hosting this endpoint. This can be used to determine endpoints local to a node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#node_name DataKubernetesEndpointsV1#node_name}

---

### DataKubernetesEndpointsV1SubsetPort <a name="DataKubernetesEndpointsV1SubsetPort" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetPort;

DataKubernetesEndpointsV1SubsetPort.builder()
    .port(java.lang.Number)
//  .name(java.lang.String)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.port">port</a></code> | <code>java.lang.Number</code> | The port that will be exposed by this endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.name">name</a></code> | <code>java.lang.String</code> | The name of this port within the endpoint. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port that will be exposed by this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#port DataKubernetesEndpointsV1#port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this port within the endpoint.

Must be a DNS_LABEL. Optional if only one Port is defined on this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#name DataKubernetesEndpointsV1#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.1/docs/data-sources/endpoints_v1#protocol DataKubernetesEndpointsV1#protocol}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointsV1MetadataOutputReference <a name="DataKubernetesEndpointsV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1MetadataOutputReference;

new DataKubernetesEndpointsV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1MetadataOutputReference.property.internalValue"></a>

```java
public DataKubernetesEndpointsV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Metadata">DataKubernetesEndpointsV1Metadata</a>

---


### DataKubernetesEndpointsV1SubsetAddressList <a name="DataKubernetesEndpointsV1SubsetAddressList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetAddressList;

new DataKubernetesEndpointsV1SubsetAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get"></a>

```java
public DataKubernetesEndpointsV1SubsetAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>>

---


### DataKubernetesEndpointsV1SubsetAddressOutputReference <a name="DataKubernetesEndpointsV1SubsetAddressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetAddressOutputReference;

new DataKubernetesEndpointsV1SubsetAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetNodeName">resetNodeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetNodeName` <a name="resetNodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.resetNodeName"></a>

```java
public void resetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeNameInput"></a>

```java
public java.lang.String getNodeNameInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>

---


### DataKubernetesEndpointsV1SubsetList <a name="DataKubernetesEndpointsV1SubsetList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetList;

new DataKubernetesEndpointsV1SubsetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get"></a>

```java
public DataKubernetesEndpointsV1SubsetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>>

---


### DataKubernetesEndpointsV1SubsetNotReadyAddressList <a name="DataKubernetesEndpointsV1SubsetNotReadyAddressList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetNotReadyAddressList;

new DataKubernetesEndpointsV1SubsetNotReadyAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get"></a>

```java
public DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>>

---


### DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference <a name="DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference;

new DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetNodeName">resetNodeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetNodeName` <a name="resetNodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.resetNodeName"></a>

```java
public void resetNodeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeNameInput"></a>

```java
public java.lang.String getNodeNameInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>

---


### DataKubernetesEndpointsV1SubsetOutputReference <a name="DataKubernetesEndpointsV1SubsetOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetOutputReference;

new DataKubernetesEndpointsV1SubsetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress">putAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress">putNotReadyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort">putPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetNotReadyAddress">resetNotReadyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddress` <a name="putAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress"></a>

```java
public void putAddress(IResolvable OR java.util.List<DataKubernetesEndpointsV1SubsetAddress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putAddress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>>

---

##### `putNotReadyAddress` <a name="putNotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress"></a>

```java
public void putNotReadyAddress(IResolvable OR java.util.List<DataKubernetesEndpointsV1SubsetNotReadyAddress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putNotReadyAddress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>>

---

##### `putPort` <a name="putPort" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort"></a>

```java
public void putPort(IResolvable OR java.util.List<DataKubernetesEndpointsV1SubsetPort> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.putPort.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetNotReadyAddress` <a name="resetNotReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetNotReadyAddress"></a>

```java
public void resetNotReadyAddress()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.address">address</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList">DataKubernetesEndpointsV1SubsetAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddress">notReadyAddress</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList">DataKubernetesEndpointsV1SubsetNotReadyAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList">DataKubernetesEndpointsV1SubsetPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.addressInput">addressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddressInput">notReadyAddressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.portInput">portInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.address"></a>

```java
public DataKubernetesEndpointsV1SubsetAddressList getAddress();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddressList">DataKubernetesEndpointsV1SubsetAddressList</a>

---

##### `notReadyAddress`<sup>Required</sup> <a name="notReadyAddress" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddress"></a>

```java
public DataKubernetesEndpointsV1SubsetNotReadyAddressList getNotReadyAddress();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddressList">DataKubernetesEndpointsV1SubsetNotReadyAddressList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.port"></a>

```java
public DataKubernetesEndpointsV1SubsetPortList getPort();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList">DataKubernetesEndpointsV1SubsetPortList</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.addressInput"></a>

```java
public java.lang.Object getAddressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetAddress">DataKubernetesEndpointsV1SubsetAddress</a>>

---

##### `notReadyAddressInput`<sup>Optional</sup> <a name="notReadyAddressInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.notReadyAddressInput"></a>

```java
public java.lang.Object getNotReadyAddressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetNotReadyAddress">DataKubernetesEndpointsV1SubsetNotReadyAddress</a>>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.portInput"></a>

```java
public java.lang.Object getPortInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1Subset">DataKubernetesEndpointsV1Subset</a>

---


### DataKubernetesEndpointsV1SubsetPortList <a name="DataKubernetesEndpointsV1SubsetPortList" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetPortList;

new DataKubernetesEndpointsV1SubsetPortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get"></a>

```java
public DataKubernetesEndpointsV1SubsetPortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>>

---


### DataKubernetesEndpointsV1SubsetPortOutputReference <a name="DataKubernetesEndpointsV1SubsetPortOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_endpoints_v1.DataKubernetesEndpointsV1SubsetPortOutputReference;

new DataKubernetesEndpointsV1SubsetPortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPortOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.dataKubernetesEndpointsV1.DataKubernetesEndpointsV1SubsetPort">DataKubernetesEndpointsV1SubsetPort</a>

---



