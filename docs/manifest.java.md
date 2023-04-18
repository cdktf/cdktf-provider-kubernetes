# `kubernetes_manifest`

Refer to the Terraform Registory for docs: [`kubernetes_manifest`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest).

# `manifest` Submodule <a name="`manifest` Submodule" id="@cdktf/provider-kubernetes.manifest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Manifest <a name="Manifest" id="@cdktf/provider-kubernetes.manifest.Manifest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest kubernetes_manifest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.Manifest;

Manifest.Builder.create(Construct scope, java.lang.String id)
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
    .manifest(java.util.Map<java.lang.String, java.lang.Object>)
//  .computedFields(java.util.List<java.lang.String>)
//  .fieldManager(ManifestFieldManager)
//  .object(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(ManifestTimeouts)
//  .wait(ManifestWait)
//  .waitFor(ManifestWaitFor)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.manifest">manifest</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A Kubernetes manifest describing the desired state of the resource in HCL format. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.computedFields">computedFields</a></code> | <code>java.util.List<java.lang.String></code> | List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.fieldManager">fieldManager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | field_manager block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.object">object</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The resulting resource state, as returned by the API server after applying the desired state from `manifest`. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | wait block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.waitFor">waitFor</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | A map of attribute paths and desired patterns to be matched. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.manifest"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A Kubernetes manifest describing the desired state of the resource in HCL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#manifest Manifest#manifest}

---

##### `computedFields`<sup>Optional</sup> <a name="computedFields" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.computedFields"></a>

- *Type:* java.util.List<java.lang.String>

List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#computed_fields Manifest#computed_fields}

---

##### `fieldManager`<sup>Optional</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.fieldManager"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

field_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#field_manager Manifest#field_manager}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.object"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The resulting resource state, as returned by the API server after applying the desired state from `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#object Manifest#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#timeouts Manifest#timeouts}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.wait"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

wait block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#wait Manifest#wait}

---

##### `waitFor`<sup>Optional</sup> <a name="waitFor" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.waitFor"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

A map of attribute paths and desired patterns to be matched.

After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#wait_for Manifest#wait_for}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager">putFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putWait">putWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor">putWaitFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetComputedFields">resetComputedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetFieldManager">resetFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetWaitFor">resetWaitFor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.Manifest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.manifest.Manifest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.manifest.Manifest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFieldManager` <a name="putFieldManager" id="@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager"></a>

```java
public void putFieldManager(ManifestFieldManager value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts"></a>

```java
public void putTimeouts(ManifestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---

##### `putWait` <a name="putWait" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait"></a>

```java
public void putWait(ManifestWait value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---

##### `putWaitFor` <a name="putWaitFor" id="@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor"></a>

```java
public void putWaitFor(ManifestWaitFor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

---

##### `resetComputedFields` <a name="resetComputedFields" id="@cdktf/provider-kubernetes.manifest.Manifest.resetComputedFields"></a>

```java
public void resetComputedFields()
```

##### `resetFieldManager` <a name="resetFieldManager" id="@cdktf/provider-kubernetes.manifest.Manifest.resetFieldManager"></a>

```java
public void resetFieldManager()
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-kubernetes.manifest.Manifest.resetObject"></a>

```java
public void resetObject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-kubernetes.manifest.Manifest.resetWait"></a>

```java
public void resetWait()
```

##### `resetWaitFor` <a name="resetWaitFor" id="@cdktf/provider-kubernetes.manifest.Manifest.resetWaitFor"></a>

```java
public void resetWaitFor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.manifest.Manifest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.Manifest;

Manifest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.Manifest;

Manifest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.Manifest;

Manifest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManager">fieldManager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitFor">waitFor</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.computedFieldsInput">computedFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManagerInput">fieldManagerInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.manifestInput">manifestInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.objectInput">objectInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitForInput">waitForInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitInput">waitInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.computedFields">computedFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.manifest">manifest</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.object">object</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.manifest.Manifest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.manifest.Manifest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.Manifest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.Manifest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.manifest.Manifest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.manifest.Manifest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.Manifest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.Manifest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.Manifest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fieldManager`<sup>Required</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManager"></a>

```java
public ManifestFieldManagerOutputReference getFieldManager();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.property.timeouts"></a>

```java
public ManifestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a>

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.Manifest.property.wait"></a>

```java
public ManifestWaitOutputReference getWait();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a>

---

##### `waitFor`<sup>Required</sup> <a name="waitFor" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitFor"></a>

```java
public ManifestWaitForOutputReference getWaitFor();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a>

---

##### `computedFieldsInput`<sup>Optional</sup> <a name="computedFieldsInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.computedFieldsInput"></a>

```java
public java.util.List<java.lang.String> getComputedFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldManagerInput`<sup>Optional</sup> <a name="fieldManagerInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManagerInput"></a>

```java
public ManifestFieldManager getFieldManagerInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.manifestInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getManifestInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.objectInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObjectInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.timeoutsInput"></a>

```java
public ManifestTimeouts getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---

##### `waitForInput`<sup>Optional</sup> <a name="waitForInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitForInput"></a>

```java
public java.lang.Object getWaitForInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> OR com.hashicorp.cdktf.IResolvable

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitInput"></a>

```java
public ManifestWait getWaitInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---

##### `computedFields`<sup>Required</sup> <a name="computedFields" id="@cdktf/provider-kubernetes.manifest.Manifest.property.computedFields"></a>

```java
public java.util.List<java.lang.String> getComputedFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.Manifest.property.manifest"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getManifest();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.Manifest.property.object"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObject();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.manifest.Manifest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManifestConfig <a name="ManifestConfig" id="@cdktf/provider-kubernetes.manifest.ManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestConfig;

ManifestConfig.builder()
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
    .manifest(java.util.Map<java.lang.String, java.lang.Object>)
//  .computedFields(java.util.List<java.lang.String>)
//  .fieldManager(ManifestFieldManager)
//  .object(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(ManifestTimeouts)
//  .wait(ManifestWait)
//  .waitFor(ManifestWaitFor)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.manifest">manifest</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A Kubernetes manifest describing the desired state of the resource in HCL format. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.computedFields">computedFields</a></code> | <code>java.util.List<java.lang.String></code> | List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.fieldManager">fieldManager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | field_manager block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.object">object</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The resulting resource state, as returned by the API server after applying the desired state from `manifest`. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | wait block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.waitFor">waitFor</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | A map of attribute paths and desired patterns to be matched. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.manifest"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getManifest();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A Kubernetes manifest describing the desired state of the resource in HCL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#manifest Manifest#manifest}

---

##### `computedFields`<sup>Optional</sup> <a name="computedFields" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.computedFields"></a>

```java
public java.util.List<java.lang.String> getComputedFields();
```

- *Type:* java.util.List<java.lang.String>

List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#computed_fields Manifest#computed_fields}

---

##### `fieldManager`<sup>Optional</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.fieldManager"></a>

```java
public ManifestFieldManager getFieldManager();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

field_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#field_manager Manifest#field_manager}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.object"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObject();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The resulting resource state, as returned by the API server after applying the desired state from `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#object Manifest#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.timeouts"></a>

```java
public ManifestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#timeouts Manifest#timeouts}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.wait"></a>

```java
public ManifestWait getWait();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

wait block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#wait Manifest#wait}

---

##### `waitFor`<sup>Optional</sup> <a name="waitFor" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.waitFor"></a>

```java
public ManifestWaitFor getWaitFor();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

A map of attribute paths and desired patterns to be matched.

After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#wait_for Manifest#wait_for}

---

### ManifestFieldManager <a name="ManifestFieldManager" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestFieldManager;

ManifestFieldManager.builder()
//  .forceConflicts(java.lang.Boolean)
//  .forceConflicts(IResolvable)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts">forceConflicts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force changes against conflicts. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.name">name</a></code> | <code>java.lang.String</code> | The name to use for the field manager when creating and updating the resource. |

---

##### `forceConflicts`<sup>Optional</sup> <a name="forceConflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts"></a>

```java
public java.lang.Object getForceConflicts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force changes against conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#force_conflicts Manifest#force_conflicts}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name to use for the field manager when creating and updating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#name Manifest#name}

---

### ManifestTimeouts <a name="ManifestTimeouts" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestTimeouts;

ManifestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Timeout for the create operation. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Timeout for the delete operation. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Timeout for the update operation. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Timeout for the create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#create Manifest#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Timeout for the delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#delete Manifest#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Timeout for the update operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#update Manifest#update}

---

### ManifestWait <a name="ManifestWait" id="@cdktf/provider-kubernetes.manifest.ManifestWait"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWait.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestWait;

ManifestWait.builder()
//  .condition(IResolvable)
//  .condition(java.util.List<ManifestWaitCondition>)
//  .fields(java.util.Map<java.lang.String, java.lang.String>)
//  .rollout(java.lang.Boolean)
//  .rollout(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of paths to fields to wait for a specific field value. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.rollout">rollout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Wait for rollout to complete on resources that support `kubectl rollout status`. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#condition Manifest#condition}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of paths to fields to wait for a specific field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#fields Manifest#fields}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.rollout"></a>

```java
public java.lang.Object getRollout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Wait for rollout to complete on resources that support `kubectl rollout status`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#rollout Manifest#rollout}

---

### ManifestWaitCondition <a name="ManifestWaitCondition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestWaitCondition;

ManifestWaitCondition.builder()
//  .status(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.status">status</a></code> | <code>java.lang.String</code> | The condition status. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.type">type</a></code> | <code>java.lang.String</code> | The type of condition. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The condition status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#status Manifest#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#type Manifest#type}

---

### ManifestWaitFor <a name="ManifestWaitFor" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestWaitFor;

ManifestWaitFor.builder()
//  .fields(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#fields Manifest#fields}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/manifest#fields Manifest#fields}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManifestFieldManagerOutputReference <a name="ManifestFieldManagerOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestFieldManagerOutputReference;

new ManifestFieldManagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts">resetForceConflicts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForceConflicts` <a name="resetForceConflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts"></a>

```java
public void resetForceConflicts()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput">forceConflictsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts">forceConflicts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forceConflictsInput`<sup>Optional</sup> <a name="forceConflictsInput" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput"></a>

```java
public java.lang.Object getForceConflictsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `forceConflicts`<sup>Required</sup> <a name="forceConflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts"></a>

```java
public java.lang.Object getForceConflicts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue"></a>

```java
public ManifestFieldManager getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---


### ManifestTimeoutsOutputReference <a name="ManifestTimeoutsOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestTimeoutsOutputReference;

new ManifestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue"></a>

```java
public ManifestTimeouts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---


### ManifestWaitConditionList <a name="ManifestWaitConditionList" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestWaitConditionList;

new ManifestWaitConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get"></a>

```java
public ManifestWaitConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

---


### ManifestWaitConditionOutputReference <a name="ManifestWaitConditionOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestWaitConditionOutputReference;

new ManifestWaitConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a> OR com.hashicorp.cdktf.IResolvable

---


### ManifestWaitForOutputReference <a name="ManifestWaitForOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestWaitForOutputReference;

new ManifestWaitForOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFields` <a name="resetFields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields"></a>

```java
public void resetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFieldsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> OR com.hashicorp.cdktf.IResolvable

---


### ManifestWaitOutputReference <a name="ManifestWaitOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.manifest.ManifestWaitOutputReference;

new ManifestWaitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout">resetRollout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<ManifestWaitCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetFields` <a name="resetFields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetRollout` <a name="resetRollout" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout"></a>

```java
public void resetRollout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput">rolloutInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout">rollout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition"></a>

```java
public ManifestWaitConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFieldsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rolloutInput`<sup>Optional</sup> <a name="rolloutInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput"></a>

```java
public java.lang.Object getRolloutInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout"></a>

```java
public java.lang.Object getRollout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue"></a>

```java
public ManifestWait getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---



