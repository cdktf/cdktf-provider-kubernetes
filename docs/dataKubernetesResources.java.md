# `dataKubernetesResources` Submodule <a name="`dataKubernetesResources` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesResources <a name="DataKubernetesResources" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources kubernetes_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_resources.DataKubernetesResources;

DataKubernetesResources.Builder.create(Construct scope, java.lang.String id)
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
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
//  .fieldSelector(java.lang.String)
//  .labelSelector(java.lang.String)
//  .limit(java.lang.Number)
//  .namespace(java.lang.String)
//  .objects(java.util.Map<java.lang.String, java.lang.Object>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | The resource apiVersion. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | The resource kind. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.fieldSelector">fieldSelector</a></code> | <code>java.lang.String</code> | A selector to restrict the list of returned objects by their fields. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | A selector to restrict the list of returned objects by their labels. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.limit">limit</a></code> | <code>java.lang.Number</code> | Limit is a maximum number of responses to return for a list call. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The resource namespace. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.objects">objects</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The response from the API server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.apiVersion"></a>

- *Type:* java.lang.String

The resource apiVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#api_version DataKubernetesResources#api_version}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

The resource kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#kind DataKubernetesResources#kind}

---

##### `fieldSelector`<sup>Optional</sup> <a name="fieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.fieldSelector"></a>

- *Type:* java.lang.String

A selector to restrict the list of returned objects by their fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#field_selector DataKubernetesResources#field_selector}

---

##### `labelSelector`<sup>Optional</sup> <a name="labelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.labelSelector"></a>

- *Type:* java.lang.String

A selector to restrict the list of returned objects by their labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#label_selector DataKubernetesResources#label_selector}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.limit"></a>

- *Type:* java.lang.Number

Limit is a maximum number of responses to return for a list call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#limit DataKubernetesResources#limit}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The resource namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#namespace DataKubernetesResources#namespace}

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.Initializer.parameter.objects"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The response from the API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#objects DataKubernetesResources#objects}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector">resetFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector">resetLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects">resetObjects</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFieldSelector` <a name="resetFieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetFieldSelector"></a>

```java
public void resetFieldSelector()
```

##### `resetLabelSelector` <a name="resetLabelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLabelSelector"></a>

```java
public void resetLabelSelector()
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObjects` <a name="resetObjects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.resetObjects"></a>

```java
public void resetObjects()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_resources.DataKubernetesResources;

DataKubernetesResources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_resources.DataKubernetesResources;

DataKubernetesResources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_resources.DataKubernetesResources;

DataKubernetesResources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_resources.DataKubernetesResources;

DataKubernetesResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataKubernetesResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataKubernetesResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataKubernetesResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput">fieldSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput">labelSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput">objectsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector">fieldSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects">objects</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `fieldSelectorInput`<sup>Optional</sup> <a name="fieldSelectorInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelectorInput"></a>

```java
public java.lang.String getFieldSelectorInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelectorInput"></a>

```java
public java.lang.String getLabelSelectorInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectsInput`<sup>Optional</sup> <a name="objectsInput" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objectsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObjectsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `fieldSelector`<sup>Required</sup> <a name="fieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.fieldSelector"></a>

```java
public java.lang.String getFieldSelector();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `objects`<sup>Required</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.objects"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObjects();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesResourcesConfig <a name="DataKubernetesResourcesConfig" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.data_kubernetes_resources.DataKubernetesResourcesConfig;

DataKubernetesResourcesConfig.builder()
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
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
//  .fieldSelector(java.lang.String)
//  .labelSelector(java.lang.String)
//  .limit(java.lang.Number)
//  .namespace(java.lang.String)
//  .objects(java.util.Map<java.lang.String, java.lang.Object>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | The resource apiVersion. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | The resource kind. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector">fieldSelector</a></code> | <code>java.lang.String</code> | A selector to restrict the list of returned objects by their fields. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | A selector to restrict the list of returned objects by their labels. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit">limit</a></code> | <code>java.lang.Number</code> | Limit is a maximum number of responses to return for a list call. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The resource namespace. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects">objects</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The response from the API server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

The resource apiVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#api_version DataKubernetesResources#api_version}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The resource kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#kind DataKubernetesResources#kind}

---

##### `fieldSelector`<sup>Optional</sup> <a name="fieldSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.fieldSelector"></a>

```java
public java.lang.String getFieldSelector();
```

- *Type:* java.lang.String

A selector to restrict the list of returned objects by their fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#field_selector DataKubernetesResources#field_selector}

---

##### `labelSelector`<sup>Optional</sup> <a name="labelSelector" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

A selector to restrict the list of returned objects by their labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#label_selector DataKubernetesResources#label_selector}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Limit is a maximum number of responses to return for a list call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#limit DataKubernetesResources#limit}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The resource namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#namespace DataKubernetesResources#namespace}

---

##### `objects`<sup>Optional</sup> <a name="objects" id="@cdktf/provider-kubernetes.dataKubernetesResources.DataKubernetesResourcesConfig.property.objects"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObjects();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The response from the API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.35.0/docs/data-sources/resources#objects DataKubernetesResources#objects}

---



